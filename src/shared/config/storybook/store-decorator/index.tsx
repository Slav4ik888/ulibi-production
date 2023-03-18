import { StateSchema, StoreProvider } from 'app/providers/store';
import { loginReducer } from 'features/auth-by-username/model';
import { profileReducer } from 'entities/profile';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { addCommentFormReducer } from 'features/add-comment-form/model';
import { articleDetailsPageReducer } from 'pages/article-details';
import { reducerArticlesPage } from 'pages/articles-page';


const defaultAsyncReducers: ReducersList = {
  login              : loginReducer,
  profile            : profileReducer,
  articleDetailsPage : articleDetailsPageReducer,
  addCommentForm     : addCommentFormReducer,
  articlesPage       : reducerArticlesPage
};


export const StoreDecorator = (
  state          : DeepPartial<StateSchema>,
  asyncReducers? : ReducersList
) => (StoryComponent: () => JSX.Element) => (
  <StoreProvider
    initialState  = {state}
    asyncReducers = {{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
