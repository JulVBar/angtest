import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsStateinterface } from './productsState.interface';

export const productsFeatureSelector = createFeatureSelector<ProductsStateinterface>('products');

export const isLoadingSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsStateinterface) => productsState.isLoading
)

export const errorSelector = createSelector(
  productsFeatureSelector,
  (state: ProductsStateinterface) => state.error
)

export const productsSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsStateinterface) => productsState.products
)


