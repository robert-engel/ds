import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {Village} from '../structures/village';
import {VillageSearchRequest} from './packet/village-search-request';
import {filter, first, map} from 'rxjs/operators';
import {VillageByIdRequest} from './packet/village-by-id-request';

@Injectable({
  providedIn: 'root'
})
export class VillageService {

  constructor(private web: WebsocketService) {
  }

  searchVillages(query: string): Observable<Village[]> {
    const req = new VillageSearchRequest(query);
    return this.web.observable('VillageSearchResponse', req)
    .pipe(
      filter(resp => resp.id === req.id),
      first(),
      map(resp => resp.villages),
    );
  }

  byId(id: number): Observable<Village> {
    return this.web.observable('VillageResponse', new VillageByIdRequest(id))
    .pipe(
      filter(resp => resp.id === id),
      first(),
    );
  }
}
