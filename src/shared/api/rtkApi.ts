import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as LS from 'shared/lib/local-storage';
import 'whatwg-fetch';



// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_URL__,
    prepareHeaders: (headers) => {
      const token = LS.getAuth()?.username || '';

      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
