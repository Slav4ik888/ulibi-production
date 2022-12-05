import { State } from 'app/providers/store';
import { ARTICLE, STATE_ARTICLE } from 'shared/lib/tests/__mocks__';
import { selectArticleDetailsData, selectArticleDetailsError, selectArticleDetailsLoading } from '.';


// selectArticleDetailsData
describe('selectArticleDetailsData', () => {
  test('Should return article data', () => {
    const state: DeepPartial<State> = {
      articleDetails: STATE_ARTICLE
    };

    expect(selectArticleDetailsData(state as State)).toEqual(ARTICLE);
  });

  test('Shoul work with undefined State', () => {
    expect(selectArticleDetailsData(undefined as unknown as State)).toEqual({});
  });

  test('Shoul work with empty State', () => {
    expect(selectArticleDetailsData({} as unknown as State)).toEqual({});
  });
});


// selectArticleDetailsError
describe('selectArticleDetailsError', () => {
  test('Should return article error', () => {
    const state: DeepPartial<State> = {
      articleDetails: { ...STATE_ARTICLE, error: 'Error' }
    };

    expect(selectArticleDetailsError(state as State)).toEqual('Error');
  });

  test('Shoul work with undefined State', () => {
    expect(selectArticleDetailsError(undefined as unknown as State)).toEqual(undefined);
  });

  test('Shoul work with empty State', () => {
    expect(selectArticleDetailsError({} as unknown as State)).toEqual(undefined);
  });
});



// selectArticleDetailsLoading
describe('selectArticleDetailsLoading', () => {
  test('Should return article loading', () => {
    const state: DeepPartial<State> = {
      articleDetails: { ...STATE_ARTICLE, loading: true }
    };

    expect(selectArticleDetailsLoading(state as State)).toEqual(true);
  });

  test('Shoul work with undefined State', () => {
    expect(selectArticleDetailsLoading(undefined as unknown as State)).toEqual(undefined);
  });

  test('Shoul work with empty State', () => {
    expect(selectArticleDetailsLoading({} as unknown as State)).toEqual(undefined);
  });
});

// npm run test:unit article-details-selectors.test.ts
