import { TestAsyncThunk } from 'shared/lib/tests';
import { initArticlesPage } from '.';
import { fetchArticlesList } from '../fetch-articles-list';


jest.mock('../fetch-articles-list/');

describe('initArticlesPage', () => {
  test('Succes fetch', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        _inited: false,
        entities: {},
        limit: 2,
        loading: false,
        hasMore: true
      }
    });

    await thunk.callThunk(new URLSearchParams(''));

    expect(thunk.dispatch).toBeCalledTimes(4);
    // expect(fetchArticlesList).toBeCalledWith({ page: 1 });
  });

  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        _inited: true,
        limit: 2,
        loading: false,
        hasMore: false
      }
    });

    await thunk.callThunk(new URLSearchParams(''));

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});


// npm run test:unit init-articles-page.test.ts
