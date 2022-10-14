import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, tap, filter, BehaviorSubject } from 'rxjs';
export interface Person {
  name: string,
  age: number
}

@Injectable({
  providedIn: 'root'
})

export class DataServiceTsService {
  stream$ = new BehaviorSubject<boolean>(true);

  dataBase = 'https://62f0bd3157311485d135bea7.mockapi.io/test';

  public setNextValue() {
    this.stream$.next(false)
    console.log('next value is false')
  }
  public setNextValue1() {
    this.stream$.next(true)
    console.log('next value is true')
  }
  public getStreamValueMethod() {

    return this.stream$.getValue();

  }

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
