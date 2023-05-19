import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsComponent } from './pages/list-products/list-products.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { DetailProductsComponent } from './pages/detail-products/detail-products.component';
import { UpdateProductsComponent } from './pages/update-products/update-products.component';

const routes: Routes = [
  {
    path: 'list-products',
    component: ListProductsComponent
  },
  {
    path: 'add-products',
    component: AddProductsComponent
  },
  {
    path: 'detail-products',
    component: DetailProductsComponent
  },
  {
    path: 'update-products',
    component: UpdateProductsComponent
  },
  {
    path: '**',
    redirectTo: 'list-products'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
