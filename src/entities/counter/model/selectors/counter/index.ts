import { State } from 'app/providers/store';

export const selectCounter = (state: State) => state.counter;
