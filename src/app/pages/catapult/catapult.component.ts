import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-catapult',
  templateUrl: './catapult.component.html',
})
export class CatapultComponent implements OnInit {

  links = [
    {
      title: 'Home',
      link: '/cata',
    },
    {
      title: 'Baba Übersicht',
      link: '/cata/info',
    },
  ];
  activeLink = this.links[0];

  private unsub$ = new Subject<void>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.setActive();
    this.router.events.pipe(takeUntil(this.unsub$)).subscribe(event => {
      this.setActive();
    });
  }

  setActive(): void {
    for (const link of this.links) {
      if (this.router.isActive(link.link, false)) {
        this.activeLink = link;
      }
    }
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
