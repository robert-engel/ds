import {Component, OnInit} from '@angular/core';
import {CommandTask} from '../../../service/structures/command-task';

@Component({
  selector: 'app-command-home',
  templateUrl: './command-home.component.html',
  styleUrls: ['./command-home.component.css']
})
export class CommandHomeComponent implements OnInit {

  selectedTabIndex = 0;
  editTask: CommandTask;

  constructor() {
  }

  ngOnInit(): void {
  }

  edit(task: CommandTask): void {
    this.editTask = task;
    this.selectedTabIndex = 4;
  }
}
