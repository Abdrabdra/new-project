import {createAsyncThunk} from "@reduxjs/toolkit";
import {ICategory} from "../../types/ICategory";
import {CategoryService} from "../../service/category/category.service";
import {IPagination} from "../../types/IPagination";

interface IFetchCategoriesParam {
    id:number;
    pagination:IPagination
}

export const fetchCategories = createAsyncThunk<ICategory[],IPagination>(
    'category/fetch',
    async function({limit,page},{rejectWithValue}) {
          try {
              const response = await CategoryService.getParentCategories({limit,page})
              return response.data

          }catch (e) {
              return rejectWithValue(e)
          }
    }
)
export const fetchSubCategories = createAsyncThunk<ICategory[],IFetchCategoriesParam>(
    'category/fetchOne',
    async function({id,pagination},{rejectWithValue}) {
        try {
            const response = await CategoryService.getSubCategories(id,pagination)
            return response.data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)