import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-rausstell',
  templateUrl: './rausstell.component.html',
  styleUrls: ['./rausstell.component.css']
})
export class RausstellComponent implements OnInit, OnDestroy {

  links = [
    {
      title: 'Home',
      link: '/rausstell',
    },
    {
      title: 'Dörfer',
      link: '/rausstell/villages',
    },
    {
      title: 'Incs',
      link: '/rausstell/incs',
    }
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
