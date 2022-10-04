import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ProductsService } from "src/app/services/products.service";
import { getProducts, getProductsFailure, getProductsSuccess } from "./products.actions";
import { Observable } from "rxjs";

@Injectable()

export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private produtsService: ProductsService
  ) {}

  getProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getProducts),
    mergeMap(() => {
      return this.produtsService
      .getProducts()
      .pipe(
        map((products) => getProductsSuccess({products})),
        catchError((error) => of(getProductsFailure({error: error.message}))
      ))
    })
  ))

}
