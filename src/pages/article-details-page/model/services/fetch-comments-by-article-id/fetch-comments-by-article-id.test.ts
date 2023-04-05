import { TestAsyncThunk } from 'shared/lib/tests';
import { fetchCommentsByArticleId } from '.';
import { COMMENTS } from 'shared/lib/tests/__mocks__';



describe('fetchCommentsByArticleId', () => {
  test('Succes fetch', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    // @ts-ignore
    thunk.api.get.mockReturnValue(Promise.resolve({ data: COMMENTS }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(COMMENTS);
  });


  test('Error fetch', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    // @ts-ignore
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});


// npm run test:unit fetch-comments-by-article-id.test.ts
