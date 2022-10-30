import { State, StoreProvider } from 'app/providers/store';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/auth-by-username/model';


const defaultAsyncReducers: DeepPartial<ReducersMapObject<State>> = {
  login: loginReducer
};


export const StoreDecorator = (
  state          : DeepPartial<State>,
  asyncReducers? : DeepPartial<ReducersMapObject<State>>
) => (StoryComponent: () => JSX.Element) => (
  <StoreProvider
    initialState  = {state}
    asyncReducers = {{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
