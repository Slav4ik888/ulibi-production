import { State } from 'app/providers/store';

export const selectUserInited = (state: State) => state.user._inited;
