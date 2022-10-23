import type { StateCounter } from 'entities/counter';
import { StateUser } from 'entities/user/model';
import { StateLogin } from 'features/auth-by-username/model';

export interface State {
  counter : StateCounter
  user    : StateUser
  login   : StateLogin
}
