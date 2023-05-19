import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Toast } from 'src/app/helpers/toast.interface';

import { ProductsService } from 'src/app/products/services/products.service';
 
@Injectable()
export class ProductsEffects {
 
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Load Products'),
    mergeMap((action) => this.productsService.getProductsByName()
      .pipe(
        map((products:any) => ({ type: '[Product List] Loaded Products Success', products : products.data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadProductByName$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Load ProductByName'),
    mergeMap((action:any) => this.productsService.getProductsByName(action.name)
      .pipe(
        map((resp:any) => ({ type: '[Product List] Loaded Products Success', products : resp.data })),
        catchError(() => {
          Toast.openError("No se encuentra el producto.");
          return EMPTY
        })
      ))
    )
  );

  loadProductById$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Load ProductById'),
    mergeMap((action:any) => this.productsService.getProductsById(action.idProduct)
      .pipe(
        map((resp:any) => ({ type: '[Product List] Loaded ProductById', product: resp.data })),
        catchError(() => EMPTY)
      ))
    )
  );

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Add Product'),
    mergeMap((action:any) => this.productsService.postProduct(action.product)
      .pipe(
        map((resp:any) => {
          if(resp.ok) Toast.openSuccess("Agregado correctamente.");
          return ({ type: '[Product List] Loaded ProductById', product: resp.data })
        }),
        catchError((resp) => {
          console.log(resp)
          Toast.openError(resp.error.msg);
          return EMPTY
        })
      ))
    )
  );

  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Update Product'),
    mergeMap((action:any) => this.productsService.putProduct(action.product.idProduct , action.product)
    .pipe(
      map((resp:any) => {
        if(resp.ok) Toast.openSuccess("Actualizado correctamente.");
        return ({ type: '[Product List] Loaded ProductById', product: resp.data })
      }),
      catchError((resp) => {
        console.log(resp)
        Toast.openError(resp.error.msg);
        return EMPTY
      })
    ))
    )
  );

  deleteProduct$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Delete Product'),
    mergeMap((action:any) => this.productsService.deleteProduct(action.product.idProduct)
      .pipe(
        map((resp:any) => {
          if(resp.ok) Toast.openSuccess("Eliminado correctamente.");
          return ({ type: '[Product List] Loaded ProductById', product: resp.data })
        }),
        catchError((resp) => {
          console.log(resp)
          Toast.openError(resp.error.msg);
          return EMPTY
        })
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

}