import { AxiosResponse } from "axios";
import { $api, getEnvApi } from "../../api";
import { IAuthResponse, ILogin, IRegistration, IUser } from "../../types/IAuth";
import axios from 'axios';

export class AuthService {
    static async login(creds: ILogin): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>(`auth/login`, creds)
    }
    static async refresh(): Promise<AxiosResponse<IAuthResponse>> {
        return axios.get<IAuthResponse>(`${getEnvApi()}auth/refresh`, { withCredentials: true })
    }
    static async logout(): Promise<AxiosResponse<IAuthResponse>> {
        return axios.get<IAuthResponse>(`${getEnvApi()}auth/logout`, { withCredentials: true })
    }
    static async register(creds: IRegistration): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>(`auth/registration`, creds)
    }
    static async fetchProfile(): Promise<AxiosResponse<IUser>> {
        return $api.get<IUser>(`user/me`)
    }
    static async updatePassword(oldPassword: string, newPassword: string): Promise<void> {
        $api.put(`user/password`, { oldPassword, newPassword })
    }
}