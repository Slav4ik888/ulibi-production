import { StateSchema, StoreProvider } from 'app/providers/store';
import { loginReducer } from 'features/auth-by-username/model';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { addCommentFormReducer } from 'features/add-comment-form/model';
import { articleDetailsPageReducer } from 'pages/article-details-page';
import { reducerArticlesPage } from 'pages/articles-page';
import { profileReducer } from 'features/editable-profile-card';



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
