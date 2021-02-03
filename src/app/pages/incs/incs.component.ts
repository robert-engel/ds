import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {IncManagerService} from '../../service/incmanager/inc-manager.service';

@Component({
  selector: 'app-incs',
  templateUrl: './incs.component.html',
  styleUrls: ['./incs.component.css']
})
export class IncsComponent implements OnInit, OnDestroy {

  links = [
    {
      title: 'Home',
      link: '/incs',
    },
    {
      title: 'Eigentruppen tabben',
      link: '/incs/cancel',
    }
  ];
  activeLink = this.links[0];

  private unsub$ = new Subject<void>();

  constructor(
    private router: Router,
    private inc: IncManagerService,
  ) {
  }

  heatmap(): void {
    this.inc.heatmap();
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
