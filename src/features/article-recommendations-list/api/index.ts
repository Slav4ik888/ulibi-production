import { rtkApi } from 'shared/api';



const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<any, number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});


export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;
