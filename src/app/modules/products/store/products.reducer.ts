import { createReducer, on } from "@ngrx/store";
import { getProducts, getProductsFailure, getProductsSuccess } from "./products.actions";
import { ProductsStateinterface } from "./productsState.interface";

export const initialState: ProductsStateinterface = {
  isLoading: false,
  products: [],
  error: null,
}


export const productsReducer = createReducer(
  initialState,
  on(getProducts, (state) => ({
    ...state,
    isLoading: true
  })),
  on(getProductsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    products: action.products
  })),
  on(getProductsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })),


);
