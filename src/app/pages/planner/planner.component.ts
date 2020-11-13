import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit, OnDestroy {

  links = [
    {
      title: 'Home',
      link: '/planner',
    },
    {
      title: 'Fakes',
      link: '/planner/fake',
      disabled: true,
    },
    {
      title: 'Befehle',
      link: '/planner/command',
      disabled: true,
    }
  ];
  activeLink = this.links[0];

  private unsub$ = new Subject<void>();

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.setActive();
    this.router.events.pipe(takeUntil(this.unsub$)).subscribe(event => {
      this.setActive();
    });
  }

  setActive(): void {
    for (const link of this.links) {
      if (this.router.url.includes(link.link)) {
        this.activeLink = link;
      }
    }
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
