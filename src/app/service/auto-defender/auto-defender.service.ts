import {Injectable} from '@angular/core';
import {WebsocketService} from '../websocket.service';
import {Observable} from 'rxjs';
import {AutoDefenderConfig} from './structure/auto-defender-config';
import {GetAutoDefenderConfigRequest} from './packet/get-auto-defender-config-request';
import {first, takeUntil} from 'rxjs/operators';
import {DefenseFeature} from './structure/defense-feature';
import {GetAutoDefenderSubFeaturesRequest} from './packet/get-auto-defender-sub-features-request';
import {EnableAutoDefenderFeatureRequest} from './packet/enable-auto-defender-feature-request';
import {DefenseAmount} from './structure/defense-amount';
import {SetAutoDefenderDefenseRequest} from './packet/set-auto-defender-defense-request';

@Injectable({
  providedIn: 'root'
})
export class AutoDefenderService {

  constructor(private web: WebsocketService) {
  }

  getConfig(unsub: Observable<void>): Observable<AutoDefenderConfig> {
    return this.web.observable('AutoDefenderConfigResponse', new GetAutoDefenderConfigRequest())
    .pipe(takeUntil(unsub));
  }

  getFeatures(): Observable<DefenseFeature[]> {
    return this.web.observable('AutoDefenderSubFeatureResponse', new GetAutoDefenderSubFeaturesRequest())
    .pipe(first());
  }

  setEnabled(feature: DefenseFeature, enabled: boolean): void {
    this.web.sendData(new EnableAutoDefenderFeatureRequest(feature, enabled));
  }

  setDefense(feature: DefenseFeature, size: string, amount: DefenseAmount): void {
    this.web.sendData(new SetAutoDefenderDefenseRequest(feature, size, amount));
  }
}
