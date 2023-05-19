import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ProductModel } from 'src/app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private product: string = environment.apiUrl + '/product';

  getProductsByName( name : string = '' ) {
    return this.http.get(`${ this.product }/${ name }`);
  }

  getProductsById( idProduct : string = '' ) {
    return this.http.get(`${ this.product }/id/${ idProduct }`);
  }

  postProduct( product : ProductModel ) {
    return this.http.post(`${ this.product }/`, product );
  }

  putProduct( idProduct : number, product : ProductModel) {
    return this.http.put(`${ this.product }/${ idProduct }`, product );
  }

  deleteProduct( idProduct : number ) {
    return this.http.delete(`${ this.product }/${ idProduct }`);
  }

}
