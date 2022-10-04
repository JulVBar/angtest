import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, tap, filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductInterface[]> {
    const url = `${environment.apiUrl}`;
    return this.http.get<ProductInterface[]>(url, {
      params: new HttpParams({
        fromObject: {limit: 10, page: 1}
      })
    })
    .pipe(
      map(response => response),
      tap(response => {
        console.log(response)
      })
    )
  }
}
