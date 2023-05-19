import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ListProductsComponent } from './pages/list-products/list-products.component';
import { DetailProductsComponent } from './pages/detail-products/detail-products.component';
import { UpdateProductsComponent } from './pages/update-products/update-products.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    ListProductsComponent,
    DetailProductsComponent,
    UpdateProductsComponent,
    AddProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
