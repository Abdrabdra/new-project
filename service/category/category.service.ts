import {$api} from "../../api";
import {IPagination} from "../../types/IPagination";
import {AxiosResponse} from "axios";
import {ICategory} from "../../types/ICategory";

export class CategoryService {
    static async getParentCategories(pagination?:IPagination):Promise<AxiosResponse<ICategory[]>>{
        let limit = pagination?.limit || 5;
        let page = pagination?.page ||  1;
        return await $api.get<ICategory[]>(`category/parent?page=${page}&limit=${limit}`)
    }
    static async getSubCategories(id:number,pagination?:IPagination):Promise<AxiosResponse<ICategory[]>>{
        let limit = pagination?.limit || 5;
        let page = pagination?.page ||  1;
        return await $api.get<ICategory[]>(`category/subs/${id}?limit=${limit}&page=${page}`)
    }

}