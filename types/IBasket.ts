import { IProduct, IProductCard } from "./IProduct";

export interface IBasketItem {
  id: number
  product: IProduct
  qty: number
  totalPrice: number
}
export interface IBasket {
  products: IBasketItem[]
}

export interface ICreateBasketItem {
  productId: number
  qty: number
}

export interface IBasketItemChangeQty {
  id: number
  qty: number
}