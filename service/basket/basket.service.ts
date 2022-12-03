import { AxiosResponse } from "axios";
import { $api } from "../../api";
import { IBasket, IBasketItem } from "../../types/IBasket";

export class BasketService {
  static async fetchBasket():Promise<AxiosResponse<IBasketItem[]>>{
      return $api.get<IBasketItem[]>(`/basket`);
  }
};