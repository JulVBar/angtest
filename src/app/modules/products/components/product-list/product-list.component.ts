import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { getProducts } from '../../store/products.actions';
import { errorSelector, isLoadingSelector, productsSelector } from '../../store/products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  products$: Observable<ProductInterface[]>

  constructor(private store: Store) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.products$ = this.store.pipe(select(productsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(getProducts())
  }

}
