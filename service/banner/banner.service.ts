import {$api} from "../../api";
import {AxiosResponse} from "axios";
import {IBanner} from "../../types/IBanner";
import {IPagination} from "../../types/IPagination";

export class BannerService {
    static async fetchBanners(pagination?:IPagination):Promise<AxiosResponse<IBanner[]>>{
        let limit = pagination?.limit || 5;
        let page = pagination?.page ||  1;
        return $api.get<IBanner[]>(`/banner?limit=${limit}&page=${page}`)
    }
}