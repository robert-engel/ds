import {VillageGameData} from './village-game-data';
import {Player} from './player';
import {PremiumFeatures} from './premium-features';

export interface GameData {
  player: Player;
  features: PremiumFeatures;
  village: VillageGameData;
  link_base: string;
  link_base_pure: string;
  csrf: string;
  world: string;
  market: string;
  RTL: boolean;
  version: string;
  majorVersion: string;
  screen: string;
  mode?: any;
  device: string;
  pregame: boolean;
  units: string[];
  locale: string;
  time_generated: number;
}
