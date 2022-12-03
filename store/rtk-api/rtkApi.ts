import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { $api, getEnvApi } from '../../api/index';

export const baseQuery = fetchBaseQuery({
  baseUrl: getEnvApi(),
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    } else {
      headers.set('Authorization', 'NO HEADER');
    }
    return headers;
  },
});

export default createApi({
  reducerPath: 'main-page-data',
  baseQuery: baseQuery,
  tagTypes: ['main-page-data', 'favorites', 'cards', 'spec-filters'],
  endpoints: () => ({}),
});