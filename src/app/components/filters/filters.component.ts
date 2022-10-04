import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceTsService } from 'src/app/services/data.service.ts.service';
import { Person } from 'src/app/services/data.service.ts.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(public dataService: DataServiceTsService) { }

  name: string;
  age: number;
  term: string;

  people$: Observable<Person[]>

  ngOnInit(): void {
    this.dataService.getAll().subscribe();
    this.people$ = this.dataService.getAll();
    console.log(this.term)
  }

  filterByName(name: string) {
    this.name = name;
    console.log(name)
    this.people$ = this.dataService.getAllNames('name', name);
  }

  filterByAge(age: number) {
    this.age = age;
    console.log(age)
    this.people$ = this.dataService.getAllNames('age', age);
  }

}
