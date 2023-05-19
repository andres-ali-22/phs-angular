import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/state/app.state';
import { ProductModel } from 'src/app/core/models/product.model';
import { selectProductById } from 'src/app/state/selectors/products.selectors';
import { addProduct, deleteProduct, updateProduct } from 'src/app/state/actions/products.actions';
import { Toast } from 'src/app/helpers/toast.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() type!: string;

  product : ProductModel = { };

  constructor(private store: Store<AppState>) { }

  add() {
    this.store.dispatch(addProduct({ product: { ...this.product } }))
  }

  delete() {
    this.store.dispatch(deleteProduct({ product: { ...this.product } }))
  }

  update() {
    this.store.dispatch(updateProduct({ product: { ...this.product } }))
  }

  ngOnInit(): void {
    this.store.select(selectProductById).subscribe(resp => {
      this.product = (this.type == 'add') ? { idProduct: undefined, available: true } : { ...resp }
    });

    if (Object.keys(this.product).length === 0) { Toast.openErrorPersist('Selecciona un producto.') }
  }

}
