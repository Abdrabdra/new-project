import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtk-api/rtkApi";

export default createApi({
  reducerPath: 'basketApi',
  baseQuery: baseQuery,
  tagTypes: ['basket-products'],
  endpoints: () => ({}),
});