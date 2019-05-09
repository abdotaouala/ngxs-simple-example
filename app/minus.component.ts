import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Minus,Add, CountState } from './app.state';

@Component({
  selector: 'my-minus-comp',
  template: `
   
    <button (click)="onRemove()">Minus</button>
  `
})
export class MinusComponent  {

  @Select(CountState) count$: Observable<number>;


  constructor(private store: Store) {}

/**
 * Add new Element
 */

  onAdd() {
    this.store.dispatch(new Add());
  }

  onRemove(){
    this.store.dispatch(new Minus());
  }
  
}
