import {IPagination} from "../../types/IPagination";
import {$api} from "../../api";
import {AxiosResponse} from "axios";
import {IProductOneResponse, IProductCardsResponse} from "../../types/IProduct";

export class ProductService {
    static async fetchProducts(pagination?:IPagination):Promise<AxiosResponse<IProductCardsResponse>>{
        let limit = pagination?.limit || 5;
        let page = pagination?.page ||  1;
        return $api.get<IProductCardsResponse>(`product?${limit}&page=${page}`)
    }
    static async fetchOneProduct(id:number):Promise<AxiosResponse<IProductOneResponse>>{
        return $api.get<IProductOneResponse>(`product/get-one/${id}`)
    }
}