import { StateSchema } from 'app/providers/store';
import { STATE_ARTICLE_COMMENTS } from 'shared/lib/tests/__mocks__';
import { selectArticleDetailsCommentsError, selectArticleDetailsCommentsLoading } from '.';



// selectArticleDetailsCommentsError
describe('selectArticleDetailsCommentsError', () => {
  test('Should return article error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: { ...STATE_ARTICLE_COMMENTS, error: 'Error' }
      }
    };

    expect(selectArticleDetailsCommentsError(state as StateSchema)).toEqual('Error');
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticleDetailsCommentsError(undefined as unknown as StateSchema)).toEqual(undefined);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticleDetailsCommentsError({} as unknown as StateSchema)).toEqual(undefined);
  });
});



// selectArticleDetailsCommentsLoading
describe('selectArticleDetailsCommentsLoading', () => {
  test('Should return article loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: { ...STATE_ARTICLE_COMMENTS, loading: true }
      }
    };

    expect(selectArticleDetailsCommentsLoading(state as StateSchema)).toEqual(true);
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticleDetailsCommentsLoading(undefined as unknown as StateSchema)).toEqual(undefined);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticleDetailsCommentsLoading({} as unknown as StateSchema)).toEqual(undefined);
  });
});

// npm run test:unit article-details-comments-selectors.test.ts
