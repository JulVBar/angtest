import { createAction, props } from '@ngrx/store';
import { ProductInterface } from '../../../interfaces/product.interface';

export const getProducts = createAction('[Products] Get Products');

export const getProductsSuccess = createAction(
  '[Products] Get Products success',
  props<{products: ProductInterface[]}>()
);

export const getProductsFailure = createAction(
  '[Products] Get Products failure',
  props<{error: string}>()
  );
