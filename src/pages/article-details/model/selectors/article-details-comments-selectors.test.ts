import { State } from 'app/providers/store';
import { STATE_ARTICLE, STATE_ARTICLE_COMMENTS } from 'shared/lib/tests/__mocks__';
import { selectArticleDetailsCommentsError, selectArticleDetailsCommentsLoading } from '.';



// selectArticleDetailsCommentsError
describe('selectArticleDetailsCommentsError', () => {
  test('Should return article error', () => {
    const state: DeepPartial<State> = {
      articleDetailsComments: { ...STATE_ARTICLE_COMMENTS, error: 'Error' }
    };

    expect(selectArticleDetailsCommentsError(state as State)).toEqual('Error');
  });

  test('Shoul work with undefined State', () => {
    expect(selectArticleDetailsCommentsError(undefined as unknown as State)).toEqual(undefined);
  });

  test('Shoul work with empty State', () => {
    expect(selectArticleDetailsCommentsError({} as unknown as State)).toEqual(undefined);
  });
});



// selectArticleDetailsCommentsLoading
describe('selectArticleDetailsCommentsLoading', () => {
  test('Should return article loading', () => {
    const state: DeepPartial<State> = {
      articleDetailsComments: { ...STATE_ARTICLE_COMMENTS, loading: true }
    };

    expect(selectArticleDetailsCommentsLoading(state as State)).toEqual(true);
  });

  test('Shoul work with undefined State', () => {
    expect(selectArticleDetailsCommentsLoading(undefined as unknown as State)).toEqual(undefined);
  });

  test('Shoul work with empty State', () => {
    expect(selectArticleDetailsCommentsLoading({} as unknown as State)).toEqual(undefined);
  });
});

// npm run test:unit article-details-comments-selectors.test.ts
