import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from './category/category.slice'
import authReducer from './auth/auth.slice';
import rtkApi from "./rtk-api/rtkApi";
import orderApi from "./order/orderApi";
import basketApi from "./basket/basketApi";
import alertReducer from "./alert/alert.slice";
import productApi from "./product/productApi";
import logger from "redux-logger";

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
})

const middlewares = [
    rtkApi.middleware,
    orderApi.middleware,
    basketApi.middleware,
    productApi.middleware
]

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

export const store = configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewares),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch