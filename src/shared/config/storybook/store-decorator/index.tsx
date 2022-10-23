import { State, StoreProvider } from 'app/providers/store';
import { DeepPartial } from '@reduxjs/toolkit';


export const StoreDecorator = (state: DeepPartial<State>) => (StoryComponent: () => JSX.Element) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
);
