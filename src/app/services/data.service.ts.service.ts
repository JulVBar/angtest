import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, tap, filter } from 'rxjs';
export interface Person {
  name: string,
  age: number
}

@Injectable({
  providedIn: 'root'
})

export class DataServiceTsService {

  dataBase = 'https://62f0bd3157311485d135bea7.mockapi.io/test';

  constructor(
    private http: HttpClient) {}

    isLoading$: Observable<boolean>;
    persons: Person[] = [];

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.dataBase)
    .pipe(
      tap(items => {
        this.persons = items;
      })
    )
  }

  getAllNames(filter: string, term: string | number): Observable<Person[]> {
    const url = `${this.dataBase}?${filter}=${term}`;
    return this.http.get<Person[]>(url)
    .pipe(
      tap(items => {
        this.persons = items;
      })
    )
  }

  getAllAges(): Observable<Person[]> {
    return this.http.get<Person[]>(this.dataBase)
    .pipe(
      tap(items => {
        this.persons = items;
      })
    )
  }
}
