import { IBasket, IBasketItem, IBasketItemChangeQty, ICreateBasketItem } from "../../types/IBasket";
import basketApi from "./basketApi";

export const basketEndpoints = basketApi.injectEndpoints({
  endpoints: (builder) => ({
    getBasketItems: builder.query<IBasketItem[], string>({
      query: () => ({
        url: `/basket`
      }),
      providesTags: ['basket-products']
    }),
    createBasketItem: builder.mutation<IBasket, ICreateBasketItem>({
      query: (basketItem) => ({
        method: 'POST',
        url: `/basket`,
        body: basketItem
      }),
      invalidatesTags: ['basket-products']
    }),
    changeBasketItemQty: builder.mutation<IBasket, IBasketItemChangeQty>({
      query: (basketItem) => ({
        method: 'PUT',
        url: `/basket/calc`,
        body: basketItem
      }),
      invalidatesTags: ['basket-products']
    })
  })
})

export const { useGetBasketItemsQuery, useCreateBasketItemMutation, useChangeBasketItemQtyMutation } = basketEndpoints;
