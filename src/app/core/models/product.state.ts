import { ProductModel } from "./product.model";

export interface ProductsState {
    loading: boolean,
    products: Array<ProductModel>;
    product: ProductModel;
}