import { createReducer, on } from "@ngrx/store";
import { loadProducts, loadedProductById, loadedProducts } from "../actions/products.actions";
import { ProductsState } from "src/app/core/models/product.state";

export const initialState: ProductsState = { 
    loading: false, 
    products: [], 
    product: { }
}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedProducts, (state, { products }) => {
        return { ...state, loading: false, products }
    }),
    on(loadedProductById, (state, { product }) => {
        return { ...state, loading: false, product }
    })
);