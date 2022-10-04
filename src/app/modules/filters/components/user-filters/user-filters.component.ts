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

  constructor(public dataService: DataServiceTsService) { }

  name: string;
  age: number;
  term: string;

  people$: Observable<Person[]>

  ngOnInit(): void {
    this.dataService.getAll().subscribe();
    this.people$ = this.dataService.getAll();
  }

  filterByName(name: string) {
    this.name = name;
    this.people$ = this.dataService.getAllNames('name', name);
  }

  filterByAge(age: number) {
    this.age = age;
    this.people$ = this.dataService.getAllNames('age', age);
  }

}
