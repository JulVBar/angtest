import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/products.reducer';
import {MatCardModule} from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/products.effects';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    MatCardModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
