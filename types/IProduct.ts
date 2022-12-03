import { ICategory } from "./ICategory";
import { IShop } from "./IShop";
import { ISpecValue } from "./ISpec";

export interface IProductCard {
    id: number
    title: string
    price: number
    discount: number
    rating: null | string
    sells: number | string
    image: string
}
export interface IProductCardsResponse {
    products: IProductCard[]
    count: number
}

export interface IProduct {
    id: number
    title: string
    category: ICategory
    smallDesc: string
    fullDesc: string
    price: number
    discount: number
    specs: ISpecValue[]
    image: string
    photos: IPhoto[]
    rating: null | string
    sells: string
    shop: IShop
}
export interface IProductOneResponse {
    product: IProduct;
    avg: number;
    is_fav: boolean;
}
export interface IPhoto {
    id: number
    image: string
}