import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ProductsState } from "src/app/core/models/product.state";

export const selectProductsFeature = (state: AppState) => state.Products;

export const selectListProducts = createSelector(
    selectProductsFeature,
    (state: ProductsState) => state.products
);

export const selectLoadingProducts = createSelector(
    selectProductsFeature,
    (state: ProductsState) => state.loading
);

export const selectProductById = createSelector(
    selectProductsFeature,
    (state: ProductsState) => state.product
);