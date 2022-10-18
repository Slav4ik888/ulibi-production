import type { StateCounter } from 'entities/counter';
import { StateUser } from 'entities/user/model';

export interface State {
  counter : StateCounter
  user    : StateUser
}
