import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceTsService } from 'src/app/services/data.service.ts.service';
import { Person } from 'src/app/services/data.service.ts.service';

@Component({
  selector: 'app-user-filters',
  templateUrl: './user-filters.component.html',
  styleUrls: ['./user-filters.component.scss']
})
export class UserFiltersComponent implements OnInit {

  constructor(public dataService: DataServiceTsService) {
    this.dataService.stream$.subscribe()
    this.constrGetStrictValue = this.dataService.stream$.getValue(); //mount: +, next:-
    this.constrGetStrictValue = this.dataService.getStreamValueMethod(); //mount: -, next:-
  }

  name: string;
  age: number;
  term: string;
  showMethodValueStrict: boolean;
  showMethodValueMethod: boolean;
  constrGetStrictValue: boolean;
  constrGetMethodValue: boolean;
  ngGetStrictValue: boolean;
  ngGetMethodValue: boolean;

  // This value is reactive
  //<li>Get value strict in component html: {{dataService.stream$.getValue()}}</li>
  //mount: +, next:+


  people$: Observable<Person[]>
  data: Person[]

  showStreamValue() {
    this.showMethodValueStrict = this.dataService.stream$.getValue(); //mount: -(only call showmethod), next:-
    this.showMethodValueMethod = this.dataService.getStreamValueMethod(); //mount: -(only call showmethod), next:-
  }
  ngOnInit(): void {
    this.dataService.stream$.subscribe()

    this.dataService.getAll().subscribe(); //нужна отписка
    this.people$ = this.dataService.getAll(); //отписка не нужна, т.к. | async
    this.dataService.getAll().subscribe(data=>this.data = data);

    this.ngGetStrictValue = this.dataService.stream$.getValue(); //mount: +, next:-
    this.ngGetMethodValue = this.dataService.getStreamValueMethod(); //mount: +, next:-
  }

  filterByName(name: string) {
    this.name = name;
    this.people$ = this.dataService.getAllNames('name', name);
  }



  filterByAge(age: number) {
    this.age = age;
    this.people$ = this.dataService.getAllNames('age', age);
  }

  addPerson() {
    this.dataService.addOne({
        name: 'Name',
        age: 999
    }).subscribe(()=>{
      console.log('success')
      this.people$ = this.dataService.getAll()
    })

  }

}
