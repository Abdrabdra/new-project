import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtk-api/rtkApi";

export default createApi({
  reducerPath: 'productApi',
  baseQuery: baseQuery,
  tagTypes: ['search-products', 'one-product'],
  endpoints: () => ({}),
});