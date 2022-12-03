import { Streetview } from "@mui/icons-material";
import { string } from "yup/lib/locale";
import { IProduct, IProductCard } from "./IProduct";

export interface INewOrder {
  apartment: string;
  building: string;
  street: string;
  city: string;
  phone: string;
  date: string;
  successUrl: string
  errorUrl: string
}

export interface IOrder {
  id: number;
  apartment: string;
  building: string;
  street: string;
  city: string;
  totalPrice: number; //?
  phone: number;
  date: string; //?
  shopOrders: IShopOrder[];
}

export interface IOrderHistory {
  id: number
  apartment: string
  building: string
  street: string
  city: string
  status: IOrderStatus
  totalPrice: number
  created_at: Date
  products: IOrderHistoryProduct[]
}

export interface IOrderHistoryProduct {
  id: number
  qty: number
  totalPrice: number
  status: IOrderStatus
  product: IProductCard
}

export interface IOrdersReponse {
  count: number;
  orders: IOrder[]
}

interface IShopOrder {
  id: number;
  totalPrice: number;
  status: string;
  orderNo: number | null; //?
  products: IProductsOrder[]; //?
  shop: IShop[];
}

interface IProductsOrder {
  id: number;
  qty: number;
  status: "CREATED" | "PAYMENT" | "DELIVERED";
  ordered: boolean;
  totalPrice: number;
  product: IProduct;
}

interface IShop {
  id: number;
  name: string;
  description: string;
  logo: string;
  legalAddress: string;
  legalCity: string;
  bit_iin: string;
  instagram: null; //?
  phone: number;
  shop_type: string;
  payment: boolean;
  confirm: boolean;
  view: boolean;
}

export enum IOrderStatus {
  CREATED = "Создано",
  PAYMENT = "Оплачено",
  DELIVERING = "Доставляется",
  DELIVERED = "Доставлено",
  RETURNED = "Возврат",
  ERROR = "Ошибка"
}

export const IOrderStatuses = {
  "CREATED": "Создано",
  "PAYMENT": "Оплачено",
  "DELIVERED": "Доставлено"
}
