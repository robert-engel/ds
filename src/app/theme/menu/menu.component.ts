import {Component, Input, OnInit} from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  items: Menu[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
