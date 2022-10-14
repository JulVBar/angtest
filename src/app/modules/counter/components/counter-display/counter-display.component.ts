import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataServiceTsService } from 'src/app/services/data.service.ts.service';
import { increment, decrement, reset } from '../../store/counter.actions';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {
  count$: Observable<number>

  constructor(private store: Store<{ counter: number }>,
    public dataService: DataServiceTsService) {
    this.count$ = store.select('counter');
  }

  ngOnInit(): void {

  }

  increment() {
    this.store.dispatch(increment());

  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
