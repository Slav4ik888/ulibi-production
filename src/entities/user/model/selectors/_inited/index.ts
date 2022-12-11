import { StateSchema } from 'app/providers/store';

export const selectUserInited = (state: StateSchema) => state.user._inited;
