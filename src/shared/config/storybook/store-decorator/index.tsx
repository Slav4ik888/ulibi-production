import { State, StoreProvider } from 'app/providers/store';
import { loginReducer } from 'features/auth-by-username/model';
import { profileReducer } from 'entities/profile';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { articleDetailsReducer } from 'entities/article/model/slice';


const defaultAsyncReducers: ReducersList = {
  login          : loginReducer,
  profile        : profileReducer,
  articleDetails : articleDetailsReducer
};


export const StoreDecorator = (
  state          : DeepPartial<State>,
  asyncReducers? : ReducersList
) => (StoryComponent: () => JSX.Element) => (
  <StoreProvider
    initialState  = {state}
    asyncReducers = {{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
