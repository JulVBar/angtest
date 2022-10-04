import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFiltersComponent } from './components/user-filters/user-filters.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from 'src/app/pipes/filter-pipe.pipe';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    UserFiltersComponent,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule

  ],
  exports: [
    UserFiltersComponent
  ]
})
export class FiltersModule { }
