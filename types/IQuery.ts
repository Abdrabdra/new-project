import { ISpec } from "./ISpec";

export interface IProductQuery {
  title?: number | string
  categoryId?: number | string
  tagId?: number | string
  priceFrom?: number | string
  priceTo?: number | string
  brandId?: number | string
  discount?: number | string
  specs?: ISpec
  limit?: number
  page?: number
}