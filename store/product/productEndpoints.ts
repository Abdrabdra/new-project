import { IFeedbackResponse } from "../../types/IFeedback";
import { IProduct, IProductCardsResponse, IProductOneResponse } from "../../types/IProduct";
import { IProductQuery } from "../../types/IQuery";
import { ISpecList } from "../../types/ISpec";
import productApi from "./productApi";

export const productEndpoints = productApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsList: builder.query<IProductCardsResponse, IProductQuery>({
      query: (query) => ({
        url: `/product?${Object.entries(query).map((q) => {
          if (q) return `${q[0]}=${q[1]}&`;
        })}`,
        // url: `product?search=iphone`
      }),
      providesTags: ["search-products"],
    }),
    getOneProduct: builder.query<IProductOneResponse, string>({
      query: (id: string) => ({
        url: `/product/get-one/${id}`,
      }),
      providesTags: ['one-product']
    }),
    addProductToFav: builder.mutation<IProduct, number>({
      query: (id) => ({
        url: `/user/add-favorite/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['one-product']
    }),
    deleteProductFromFav: builder.mutation<IProduct, number>({
      query: (id) => ({
        url: `/user/delete-favorite/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['one-product']
    }),
    getOneProductFeedbacks: builder.query<IFeedbackResponse, string>({
      query: (id: string) => ({
        url: `feedback?page=1&limit=5&productId=${id}`
      })
    }),
    getRelatedProducts: builder.query<IProductCardsResponse, string>({
      query: (categoryId) => ({
        url: `/product/get-by-category/${categoryId}?limit=${6}&page=${0}`,
      }),
    }),
    getSpecsList: builder.query<ISpecList[], string>({
      query: (categoryId) => ({
        url: `/spec/category/${categoryId}`,
      }),
      // providesTags: ["spec-filters"],
    }),
  })
})

export const {
  useGetOneProductFeedbacksQuery,
  useGetProductsListQuery,
  useGetSpecsListQuery,
  useGetOneProductQuery,
  useAddProductToFavMutation,
  useDeleteProductFromFavMutation
} = productEndpoints;