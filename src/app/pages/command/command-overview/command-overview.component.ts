import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommandTask} from '../../../service/structures/command-task';
import {CommandService} from '../../../service/command/command.service';
import {interval, Subject} from 'rxjs';
import {CommandListResponse} from '../../../service/structures/command-list-response';
import {takeUntil} from 'rxjs/operators';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Clipboard} from '@angular/cdk/clipboard';
import {Router} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {WebsocketService} from '../../../service/websocket.service';
import {MatDialog} from '@angular/material/dialog';
import {CommandEditComponent} from '../command-edit/command-edit.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-command-overview',
  templateUrl: './command-overview.component.html',
  styleUrls: ['./command-overview.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CommandOverviewComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private unsub$ = new Subject<void>();

  columnsToDisplay: string[] = ['select', 'from', 'to', 'commandType', 'unit', 'sendTime', 'arrivalTime', 'remainingDelay'];
  tasks: CommandListResponse = {
    id: Math.random(),
    count: 0,
    tasks: [],
  };
  world: string;
  expandedElement: CommandTask | null;

  isLoadingResults = false;

  selection = new SelectionModel<CommandTask>(true, []);

  removeControl = new FormControl(false);
  private shouldReload = false;

  constructor(
    private commandService: CommandService,
    private clipboard: Clipboard,
    private router: Router,
    private web: WebsocketService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.removeControl.setValue(this.commandService.shouldOverviewRemove(), {emitEvent: false});
    this.removeControl.valueChanges.subscribe(value => {
      this.commandService.setOverviewRemove(value);
    });
    this.web.info().subscribe(info => {
      this.world = info.world;
    });
    this.isLoadingResults = true;
    this.commandService.getCommandList(10, 0).subscribe(resp => {
      this.isLoadingResults = false;
      this.tasks = resp;
    });
    this.commandService.addCommandEvents().pipe(takeUntil(this.unsub$)).subscribe(task => {
      this.tasks.tasks = [...this.tasks.tasks, task];
      this.tasks.count++;
      this.tasks.tasks.sort((a, b) => {
        return a.remainingDelay < b.remainingDelay ? -1 : 1;
      });
    });
    this.commandService.removeCommandEvents().pipe(takeUntil(this.unsub$)).subscribe(id => {
      this.tasks.tasks = this.tasks.tasks.filter((value, index, array) => {
        return value.id !== id;
      });
      this.tasks.count--;
    });
    interval(1000).pipe(takeUntil(this.unsub$)).subscribe(num => {
      let shouldReload = false;
      this.tasks?.tasks?.forEach((task, index, arr) => {
        if (task.remainingDelay === 1) {
          shouldReload = true;
        }
        if (arr[index].remainingDelay > 0) {
          arr[index].remainingDelay -= 1;
        }
      });
      if (shouldReload) {
        setTimeout(() => {
          this.shouldReload = true;
        }, 16500);
      }
      if (this.shouldReload && this.removeControl.value === true) {
        this.shouldReload = false;
        this.refresh(this.paginator);
      }
    });
  }

  placeLink(row: CommandTask): string {
    return 'https://' +
      this.world +
      '.die-staemme.de/game.php?village=' +
      row.from.id +
      '&screen=place&mode=command&target=' +
      row.to.id;
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.tasks.tasks.length;
  }

  masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.tasks.tasks.forEach(row => this.selection.select(row));
  }

  editTask(pTask: CommandTask): void {
    this.dialog.open(CommandEditComponent, {
      data: pTask,
    }).afterClosed().subscribe(task => {
      if (task) {
        this.tasks.tasks = this.tasks?.tasks?.map(value => {
          if (value.id === task.id) {
            return task;
          } else {
            return value;
          }
        });
        this.expandedElement = task;
      }
    });
  }

  refresh(paginator: MatPaginator): void {
    this.isLoadingResults = true;
    setTimeout(() => {
      this.commandService.getCommandList(paginator.pageSize, paginator.pageIndex * paginator.pageSize).subscribe(resp => {
        this.tasks = resp;
        this.isLoadingResults = false;
      });
    }, 100);
  }

  pageUpdate(event: PageEvent): void {
    this.isLoadingResults = true;
    setTimeout(() => {
      this.commandService.getCommandList(event.pageSize, event.pageIndex * event.pageSize).subscribe(resp => {
        this.tasks = resp;
        this.isLoadingResults = false;
      });
    }, 100);
  }

  delete(task: CommandTask, paginator: MatPaginator): void {
    this.commandService.removeCommand(task.id);
    this.refresh(paginator);
  }

  exportWorkbench(): void {
    this.commandService.exportWorkbench().subscribe(data => {
      this.clipboard.copy(data);
    });
  }

  deleteSelected(paginator: MatPaginator): void {
    this.selection.selected.forEach(value => {
      this.selection.deselect(value);
      this.commandService.removeCommand(value.id);
    });
    this.refresh(paginator);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
