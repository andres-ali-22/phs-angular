import { ActionReducerMap } from "@ngrx/store";
import { ProductsState } from "../core/models/product.state";
import { productsReducer } from "./reducers/products.reducers";

export interface AppState {
    Products: ProductsState
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    Products: productsReducer
}