import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IAuth";
import { ActionsEnum } from "../enum";
import { fetchUser, login, logout, refresh, updatePassword } from "./auth.action";

interface IInitState {
    isAuth: boolean;
    user: IUser | null;
    error: string;
    status: ActionsEnum;
}

const initialState: IInitState = {
    status: ActionsEnum.IDLE,
    error: '',
    user: null,
    isAuth: false
}

const authReducer = createSlice({
    name: 'auth',
    reducers: {},
    initialState,
    extraReducers: builder => {
        builder
            .addCase(login.pending, ((state) => {
                state.status = ActionsEnum.LOADING
            }))
            .addCase(login.fulfilled, ((state, { payload }) => {
                state.status = ActionsEnum.SUCCESS
                state.isAuth = true
                state.user = payload.user
                state.error = ''
            }))
            .addCase(login.rejected, ((state, { payload }) => {
                state.status = ActionsEnum.ERROR
                state.error = payload as string
            }))
            .addCase(refresh.pending, ((state) => {
                state.status = ActionsEnum.LOADING
            }))
            .addCase(refresh.fulfilled, ((state, { payload }) => {
                state.status = ActionsEnum.SUCCESS
                state.isAuth = true
                state.user = payload.user
                state.error = ''
            }))
            .addCase(refresh.rejected, ((state, { payload }) => {
                state.status = ActionsEnum.ERROR
                state.isAuth = false
            }))
            .addCase(fetchUser.pending, ((state) => {
                state.status = ActionsEnum.LOADING
            }))
            .addCase(fetchUser.fulfilled, ((state, { payload }) => {
                state.status = ActionsEnum.SUCCESS
                state.isAuth = true
                state.user = payload
                state.error = ''
            }))
            .addCase(fetchUser.rejected, ((state, { payload }) => {
                state.status = ActionsEnum.ERROR
                state.error = payload as string
            }))
            .addCase(updatePassword.pending, ((state) => {
                state.status = ActionsEnum.LOADING
            }))
            .addCase(updatePassword.fulfilled, ((state) => {
                state.status = ActionsEnum.SUCCESS
                state.error = ''
            }))
            .addCase(updatePassword.rejected, ((state, { payload }) => {
                state.status = ActionsEnum.ERROR
                state.error = payload as string
            }))
            .addCase(logout.fulfilled, () => {
                return initialState
            })
    }
})
export default authReducer.reducer
