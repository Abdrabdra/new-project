import { INewOrder, IOrder, IOrderHistory, IOrdersReponse } from "../../types/IOrder";
import basketApi from "./orderApi";

export const orderEndpoints = basketApi.injectEndpoints({
  endpoints: (builder) => ({
    makeOrder: builder.mutation<{ url: string }, INewOrder>({
      query: (body) => ({
        method: 'POST',
        url: `/order`,
        body
      }),
    }),
    getOrders: builder.query<IOrderHistory[], string>({
      query: () => ({
        url: `/order/history`,
      }),
      providesTags: ["order-history"]
    }),
  })
})

export const { useGetOrdersQuery, useMakeOrderMutation } = orderEndpoints;