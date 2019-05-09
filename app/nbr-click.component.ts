import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CountState } from './app.state';

@Component({
  selector: 'my-nbr-click',
  template: `
  <div>
  <b>Add Click is  : {{nbrAddClick$ | async}}</b>
  </div>
  <div>
  <b>Minus Click is : {{nbrMinusClick$ | async}}</b>
  </div> 
  `
})
export class NbrClickComponent  {

  @Select(state =>state.count.nbrAddClick) nbrAddClick$: Observable<number>;
  @Select(state =>state.count.nbrMinusClick) nbrMinusClick$: Observable<number>;

  constructor(private store: Store) {}
  
}
