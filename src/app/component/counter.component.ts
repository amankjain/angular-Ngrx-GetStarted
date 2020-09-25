
import {Component} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import { count } from 'rxjs/operators';
import {increment, decrement, reset} from '../counter.actions'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class MyCounterComponent{
  count$: Observable<Number>;
  constructor(private store: Store<{count: number}>){
    this.count$ = this.store.pipe(select('count'));
  }
  increment()
  {
    //this is not recursive. calling the action creator here ()
    this.store.dispatch(increment());

  }
  decrement()
  {
    //dispatch a decrement action
    this.store.dispatch(decrement());
    
  }
  reset(){
    //dispatch a reset action
    this.store.dispatch(reset());

  }

}
