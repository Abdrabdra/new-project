import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AuthService } from "../../service/auth/auth.service";
import { IAuthResponse, ILogin, IRegistration, IUser } from "../../types/IAuth";

export const login = createAsyncThunk<IAuthResponse, ILogin>(
    'auth/login',
    async function (creds, { rejectWithValue }) {
        try {
            const response = await AuthService.login(creds);
            localStorage.setItem('access_token', response.data.access_token);
            return response.data;
        } catch (e: any) {
            const { email, password } = e.response.data.errors;
            if (email) {
                throw rejectWithValue(email[0] as string);
            }
            if (password) {
                throw rejectWithValue(password[0] as string);
            }
            throw rejectWithValue(e.response.data.errors as string);
        }
    }
);

export const refresh = createAsyncThunk<IAuthResponse>(
    'auth/refresh',
    async function (_, { rejectWithValue }) {
        try {
            const response = await AuthService.refresh();
            localStorage.setItem('access_token', response.data.access_token);
            return response.data;
        } catch (e: any) {
            console.log(e)
            throw rejectWithValue('Не авторизован');
        }
    }
);

export const register = createAsyncThunk<IAuthResponse, IRegistration>(
    'auth/login',
    async function (creds, { rejectWithValue }) {
        try {
            const response = await AuthService.register(creds);
            localStorage.setItem('access_token', response.data.access_token);
            return response.data;
        } catch (e: any) {
            const { email, password } = e.response.data.errors;
            if (email) {
                throw rejectWithValue(email[0] as string);
            }
            if (password) {
                throw rejectWithValue(password[0] as string);
            }
            throw rejectWithValue(e.response.data.errors as string);
        }
    }
);

export const logout = createAsyncThunk<IAuthResponse>(
    'auth/logout',
    async function (_, { rejectWithValue }) {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('access_token');
            return response.data;
        } catch (e) {
            throw rejectWithValue(e);
        }
    }
);

export const fetchUser = createAsyncThunk(
    'profile/fetch',
    async function (_, { rejectWithValue }) {
        try {
            const response = await AuthService.fetchProfile();
            return response.data;
        } catch (e) {
            localStorage.removeItem('access_token');
            throw rejectWithValue(e);
        }
    }
);

export const updatePassword = createAsyncThunk<void, { oldPassword: string, newPassword: string }>(
    'profile/updatePassword',
    async function ({ oldPassword, newPassword }, { rejectWithValue }) {
        try {
            await AuthService.updatePassword(oldPassword, newPassword);
        } catch (e) {
            throw rejectWithValue(e);
        }
    }
)