import { TestAsyncThunk } from 'shared/lib/tests';
import { fetchArticleById } from '.';
import { MOCK_ARTICLE } from 'shared/lib/tests/__mocks__';



describe('fetchArticleById', () => {
  test('Succes fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    // @ts-ignore
    thunk.api.get.mockReturnValue(Promise.resolve({ data: MOCK_ARTICLE }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(MOCK_ARTICLE);
  });


  test('Error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    // @ts-ignore
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});


// npm run test:unit fetch-article-by-id.test.ts
