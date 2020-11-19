import {User} from './user';

export interface Login {
  id: number;
  loginTime: number;
  who: string;
  user: User;
}
