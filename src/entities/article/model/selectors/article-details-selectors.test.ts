import { StateSchema } from 'app/providers/store';
import { MOCK_ARTICLE, STATE_ARTICLE } from 'shared/lib/tests/__mocks__';
import { selectArticleDetailsData, selectArticleDetailsError, selectArticleDetailsLoading } from '.';


// selectArticleDetailsData
describe('selectArticleDetailsData', () => {
  test('Should return article data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: STATE_ARTICLE
    };

    expect(selectArticleDetailsData(state as StateSchema)).toEqual(MOCK_ARTICLE);
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticleDetailsData(undefined as unknown as StateSchema)).toEqual({});
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticleDetailsData({} as unknown as StateSchema)).toEqual({});
  });
});


// selectArticleDetailsError
describe('selectArticleDetailsError', () => {
  test('Should return article error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { ...STATE_ARTICLE, error: 'Error' }
    };

    expect(selectArticleDetailsError(state as StateSchema)).toEqual('Error');
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticleDetailsError(undefined as unknown as StateSchema)).toEqual(undefined);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticleDetailsError({} as unknown as StateSchema)).toEqual(undefined);
  });
});



// selectArticleDetailsLoading
describe('selectArticleDetailsLoading', () => {
  test('Should return article loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { ...STATE_ARTICLE, loading: true }
    };

    expect(selectArticleDetailsLoading(state as StateSchema)).toEqual(true);
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticleDetailsLoading(undefined as unknown as StateSchema)).toEqual(undefined);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticleDetailsLoading({} as unknown as StateSchema)).toEqual(undefined);
  });
});

// npm run test:unit article-details-selectors.test.ts
