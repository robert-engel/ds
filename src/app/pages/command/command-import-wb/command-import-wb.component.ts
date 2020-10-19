import {Component} from '@angular/core';
import {CommandService} from '../../../service/command/command.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-command-import-wb',
  templateUrl: './command-import-wb.component.html',
  styleUrls: ['./command-import-wb.component.css']
})
export class CommandImportWbComponent {

  control = new FormControl('', Validators.required);

  constructor(
    private command: CommandService,
  ) {
  }

  submit(data): void {
    this.control.disable();
    this.command.importWorkbench(data);
    setTimeout(() => {
      this.control.enable();
    }, 2000);
  }
}
