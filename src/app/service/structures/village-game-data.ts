import {Buildings} from './buildings';

export interface VillageGameData {
  id: number;
  name: string;
  display_name: string;
  wood: number;
  wood_prod: number;
  wood_float: number;
  stone: number;
  stone_prod: number;
  stone_float: number;
  iron: number;
  iron_prod: number;
  iron_float: number;
  pop: number;
  pop_max: number;
  x: number;
  y: number;
  trader_away: number;
  storage_max: number;
  bonus_id?: any;
  bonus?: any;
  buildings: Buildings;
  player_id: number;
  modifications: number;
  points: number;
  last_res_tick: number;
  coord: string;
  is_farm_upgradable: boolean;
}
