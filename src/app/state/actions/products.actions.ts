import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/core/models/product.model';

export const loadProducts = createAction(
    '[Product List] Load Products',
);

export const loadProductByName = createAction(
    '[Product List] Load ProductByName',
    props<{ name: string }>()
);

export const loadProductById = createAction(
    '[Product List] Load ProductById',
    props<{ idProduct: number }>()
);

export const loadedProductById = createAction(
    '[Product List] Loaded ProductById',
    props<{ product: ProductModel }>()
);

export const loadedProducts = createAction(
    '[Product List] Loaded Products Success',
    props<{ products: ProductModel[]}>()
);

export const addProduct = createAction(
    '[Product List] Add Product',
    props<{ product: ProductModel}>()
);

export const updateProduct = createAction(
    '[Product List] Update Product',
    props<{ product: ProductModel}>()
);

export const deleteProduct = createAction(
    '[Product List] Delete Product',
    props<{ product: ProductModel}>()
);