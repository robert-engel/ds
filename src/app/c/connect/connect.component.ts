import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsocketService} from '../../service/websocket.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private web: WebsocketService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      if (param.has('token')) {
        this.web.connectExternal(param.get('token'));
        this.router.navigate(['/']).then(() => {
          location.reload();
        });
      }
    });
  }

}
