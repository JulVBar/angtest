import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [
    CounterDisplayComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', counterReducer),
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CounterDisplayComponent
  ]
})
export class CounterModule { }
