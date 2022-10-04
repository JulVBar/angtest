import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDisplayComponent } from './components/store-display/store-display.component';
import { DispatchSectionComponent } from './components/dispatch-section/dispatch-section.component';
import { FiltersComponent } from './components/filters/filters.component';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,  FormsModule}from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    StoreDisplayComponent,
    DispatchSectionComponent,
    FiltersComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
