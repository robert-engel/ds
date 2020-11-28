import {ResourceHolder} from './resource-holder';

export interface ResourceMoverConfig {
  minResources: ResourceHolder;
  maxResources: number;
  interval: number;
  maxDistance: number;
  enabled: boolean;
}
