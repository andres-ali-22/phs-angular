import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ProductModel } from 'src/app/core/models/product.model';
import { AppState } from 'src/app/state/app.state';

import { loadProductById, loadProductByName, loadProducts } from 'src/app/state/actions/products.actions';
import { selectListProducts, selectLoadingProducts } from 'src/app/state/selectors/products.selectors';
import { Toast } from 'src/app/helpers/toast.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products$: Observable<ProductModel[]> = new Observable()

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectListProducts);

    const swal = Toast.loanding("Cargando Productos");
    this.store.dispatch(loadProducts())
    this.store.select(selectLoadingProducts).subscribe(resp => {
      if (!resp) swal.close();
    })

  }

  name : string = '';
  search() {
    this.store.dispatch(loadProductByName({ name: this.name }))
  }

  btnProduct(product:any) : void {
    this.store.dispatch(loadProductById({ idProduct: product.idProduct }))
    Toast.openOptions(undefined,product.name,() => this.router.navigate(['/detail-products']), () => this.router.navigate(['/update-products']));
  }

}
