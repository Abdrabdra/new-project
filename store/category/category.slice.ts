import {createSlice} from "@reduxjs/toolkit";
import {ActionsEnum} from "../enum";
import {fetchCategories, fetchSubCategories} from "./category.action";
import {ICategory} from "../../types/ICategory";

interface IInitState {
    categories:ICategory[]
    error:unknown;
    status:ActionsEnum
}

const initialState:IInitState = {
    status:ActionsEnum.IDLE,
    error:null,
    categories:[]
}

const categorySlice = createSlice({
    name:'category',
    reducers:{},
    initialState,
    extraReducers:builder => {
        builder
            .addCase(fetchCategories.fulfilled,((state, {payload}) => {
            state.status = ActionsEnum.SUCCESS;
            state.categories = payload
            }))
            .addCase(fetchCategories.pending,((state) => {
                state.status = ActionsEnum.LOADING
            }))
            .addCase(fetchCategories.rejected,((state, {error}) => {
                state.status = ActionsEnum.ERROR
                state.error = error
            }))
            .addCase(fetchSubCategories.fulfilled,((state, {payload}) => {
                state.status = ActionsEnum.SUCCESS;
                state.categories = payload
            }))
            .addCase(fetchSubCategories.pending,((state) => {
                state.status = ActionsEnum.LOADING
            }))
            .addCase(fetchSubCategories.rejected,((state, {error}) => {
                state.status = ActionsEnum.ERROR
                state.error = error
            }))

    }
})
export default categorySlice.reducer