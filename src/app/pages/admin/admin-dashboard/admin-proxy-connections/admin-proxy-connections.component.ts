import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../admin.service';
import {ProxyConnection} from '../../structures/proxy-connection';

@Component({
  selector: 'app-admin-proxy-connections',
  templateUrl: './admin-proxy-connections.component.html',
  styleUrls: ['./admin-proxy-connections.component.css']
})
export class AdminProxyConnectionsComponent implements OnInit {

  connections: ProxyConnection[];

  constructor(private admin: AdminService) {
  }

  ngOnInit(): void {
    this.admin.getProxyConnections().subscribe(conn => {
      this.connections = conn;
    });
  }

}
