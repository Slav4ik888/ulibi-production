import { StateSchema } from 'app/providers/store';
import { MOCK_ARTICLE, STATE_ARTICLE } from 'shared/lib/tests/__mocks__';
import { selectArticleData, selectArticleError, selectArticleLoading } from '.';


// selectArticleData
describe('selectArticleData', () => {
  test('Should return article data', () => {
    const state: DeepPartial<StateSchema> = {
      article: STATE_ARTICLE
    };

    expect(selectArticleData(state as StateSchema)).toEqual(MOCK_ARTICLE);
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticleData(undefined as unknown as StateSchema)).toEqual({});
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticleData({} as unknown as StateSchema)).toEqual({});
  });
});


// selectArticleError
describe('selectArticleError', () => {
  test('Should return article error', () => {
    const state: DeepPartial<StateSchema> = {
      article: { ...STATE_ARTICLE, error: 'Error' }
    };

    expect(selectArticleError(state as StateSchema)).toEqual('Error');
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticleError(undefined as unknown as StateSchema)).toEqual(undefined);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticleError({} as unknown as StateSchema)).toEqual(undefined);
  });
});



// selectArticleLoading
describe('selectArticleLoading', () => {
  test('Should return article loading', () => {
    const state: DeepPartial<StateSchema> = {
      article: { ...STATE_ARTICLE, loading: true }
    };

    expect(selectArticleLoading(state as StateSchema)).toEqual(true);
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticleLoading(undefined as unknown as StateSchema)).toEqual(undefined);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticleLoading({} as unknown as StateSchema)).toEqual(undefined);
  });
});

// npm run test:unit article-selectors.test.ts
