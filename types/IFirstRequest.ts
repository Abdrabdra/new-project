import { IBanner } from "./IBanner";
import { ICategory } from "./ICategory";
import { IProductCard } from "./IProduct";

export interface IFirstRequest {
  bannersMain: IBanner[]
  bannersMadeinkz: IBanner[]
  bestsellers: IProductCard[]
  recommended: IProductCard[]
  // newProducts: IProductCard[]
  categories: ICategory[]
}