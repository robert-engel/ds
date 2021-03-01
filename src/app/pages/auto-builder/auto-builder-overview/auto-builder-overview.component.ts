import {Component, OnDestroy, OnInit} from '@angular/core';
import {AutoBuilderService} from '../../../service/auto-builder/auto-builder.service';
import {AutoBuilderConfig} from '../../../service/auto-builder/structure/auto-builder-config';
import {AutoBuilderTemplate} from '../../../service/auto-builder/structure/auto-builder-template';
import {Subject} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {AutoBuilderAddTemplateComponent} from '../auto-builder-add-template/auto-builder-add-template.component';
import {WebsocketService} from '../../../service/websocket.service';
import {AutoBuilderTemplateSummary} from '../../../service/auto-builder/structure/auto-builder-template-summary';
import {AutoBuilderDetailComponent} from '../auto-builder-detail/auto-builder-detail.component';

@Component({
  selector: 'app-auto-builder-overview',
  templateUrl: './auto-builder-overview.component.html',
  styleUrls: ['./auto-builder-overview.component.css']
})
export class AutoBuilderOverviewComponent implements OnInit, OnDestroy {

  private unsub$ = new Subject<void>();

  config: AutoBuilderConfig;
  templates: AutoBuilderTemplateSummary[] = [];
  newVillage: AutoBuilderTemplate;

  imageBase: string;

  constructor(
    private builder: AutoBuilderService,
    private dialog: MatDialog,
    private web: WebsocketService,
  ) {
  }

  ngOnInit(): void {
    this.web.infoObservable.subscribe(info => {
      this.imageBase = info.imageBase;
    });
    this.builder.getConfig(this.unsub$).subscribe(config => {
      this.config = config;
    });
    this.builder.getTemplates().subscribe(templates => {
      this.templates = templates;
    });
    this.builder.addTemplateEvent(this.unsub$).subscribe(template => {
      this.templates = [...this.templates, template];
    });
    this.builder.deleteTemplateEvent(this.unsub$).subscribe(id => {
      this.templates = this.templates.filter(template => {
        return template.id !== id;
      });
    });
  }

  openDetail(template: AutoBuilderTemplateSummary): void {
    this.dialog.open(AutoBuilderDetailComponent, {
      data: template,
      minWidth: '60%',
    });
  }

  deleteTemplate(template: AutoBuilderTemplateSummary): void {
    this.builder.deleteTemplate(template.id);
  }

  openAddTemplate(): void {
    this.dialog.open(AutoBuilderAddTemplateComponent, {
      minWidth: '60%',
    });
  }

  setNewVillageTemplate(template: AutoBuilderTemplate): void {
    this.builder.setNewVillageTemplate(template.id);
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
