import { IOrder } from "./../../types/IOrder";
import { IProductCard } from "./../../types/IProduct";
import { ICategory } from "../../types/ICategory";
import { IFirstRequest } from "../../types/IFirstRequest";
import { IPagination } from "../../types/IPagination";
import {
  IProductCardsResponse,
  IProductOneResponse,
} from "../../types/IProduct";
import { IProductQuery } from "../../types/IQuery";
import rtkApi from "./rtkApi";
import { IPaymentCards } from "../../types/IPayment";
import { ISpecList } from "../../types/ISpec";
import { IFeedbackResponse } from "../../types/IFeedback";
import { IMessagesResponse } from "../../types/IMessage";
import { IShopApplication } from "../../types/IShopApplication";

export const rtkEndpoints = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getMainPageData: builder.query<IFirstRequest, string>({
      query: () => ({
        url: `/mobile`,
      }),
      providesTags: ["main-page-data"],
    }),
    getFavorites: builder.query<IProductCard[], string>({
      query: (query) => ({
        url: `/user/favorite`,
      }),
      providesTags: ["favorites"],
    }),
    getPaymentCards: builder.query<IPaymentCards[], string>({
      query: (query) => ({
        url: `/payment/cards`,
      }),
      providesTags: ["cards"],
    }),
    getCategories: builder.query<ICategory[], string>({
      query: () => ({
        url: `category`,
      }),
    }),
    getNotifications: builder.query<IMessagesResponse, string>({
      query: () => ({
        url: `/user/notifications`
      })
    }),
    makeApplication: builder.mutation<IMessagesResponse, IShopApplication>({
      query: (shopInfo) => ({
        url: `/application`,
        method: 'POST',
        body: shopInfo
      })
    })
  }),
});

export const {
  useGetMainPageDataQuery,
  useGetFavoritesQuery,
  useGetPaymentCardsQuery,
  useGetCategoriesQuery,
  useGetNotificationsQuery,
  useMakeApplicationMutation
  
} = rtkEndpoints;
