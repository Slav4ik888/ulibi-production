import { TestAsyncThunk } from 'shared/lib/tests';
import { fetchArticlesList } from '.';
import { COMMENTS } from 'shared/lib/tests/__mocks__';



describe('fetchArticlesList', () => {
  test('Succes fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList);
    // @ts-ignore
    thunk.api.get.mockReturnValue(Promise.resolve({ data: COMMENTS }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(COMMENTS);
  });


  test('Error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList);
    // @ts-ignore
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});


// npm run test:unit fetch-articles-list.test.ts
