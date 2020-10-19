import {Component, OnInit} from '@angular/core';
import {CommandService} from '../../../service/command/command.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-command-simple-timer',
  templateUrl: './command-simple-timer.component.html',
  styleUrls: ['./command-simple-timer.component.css']
})
export class CommandSimpleTimerComponent implements OnInit {

  control = new FormControl('', Validators.required);

  constructor(private command: CommandService) {
  }

  ngOnInit(): void {
  }

  submit(data: string): void {
    this.control.disable();
    this.command.simpleTimer(data);
    setTimeout(() => {
      this.control.enable();
    }, 2000);
  }

}
