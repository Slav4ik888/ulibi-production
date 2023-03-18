import { StateSchema } from 'app/providers/store';
import { ArticlesView } from 'entities/article';
import { STATE_ARTICLES_PAGE } from 'shared/lib/tests/__mocks__';
import { selectArticlesPageError, selectArticlesPageLoading, selectArticlesPageView } from '.';



// selectArticlesPageError
describe('selectArticlesPageError', () => {
  test('Should return article error', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { ...STATE_ARTICLES_PAGE, error: 'Error' }
    };

    expect(selectArticlesPageError(state as StateSchema)).toEqual('Error');
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticlesPageError(undefined as unknown as StateSchema)).toEqual(undefined);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticlesPageError({} as unknown as StateSchema)).toEqual(undefined);
  });
});



// selectArticlesPageLoading
describe('selectArticlesPageLoading', () => {
  test('Should return article loading', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { ...STATE_ARTICLES_PAGE, loading: true }
    };

    expect(selectArticlesPageLoading(state as StateSchema)).toEqual(true);
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticlesPageLoading(undefined as unknown as StateSchema)).toEqual(undefined);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticlesPageLoading({} as unknown as StateSchema)).toEqual(undefined);
  });
});



// selectArticlesPageView
describe('selectArticlesPageView', () => {
  test('Should return article loading', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: { ...STATE_ARTICLES_PAGE, view: ArticlesView.LIST }
    };

    expect(selectArticlesPageView(state as StateSchema)).toEqual(ArticlesView.LIST);
  });

  test('Shoul work with undefined StateSchema', () => {
    expect(selectArticlesPageView(undefined as unknown as StateSchema)).toEqual(ArticlesView.TILE);
  });

  test('Shoul work with empty StateSchema', () => {
    expect(selectArticlesPageView({} as unknown as StateSchema)).toEqual(ArticlesView.TILE);
  });
});


// npm run test:unit articles-page-selectors.test.ts
