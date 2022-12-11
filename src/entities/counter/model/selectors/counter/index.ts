import { StateSchema } from 'app/providers/store';

export const selectCounter = (state: StateSchema) => state.counter;
