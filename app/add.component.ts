import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, CountState } from './app.state';

@Component({
  selector: 'my-add-comp',
  template: `
    <button (click)="onAdd()">Add</button>
  `
})
export class AddComponent  {

  @Select(CountState) count$: Observable<number>;


  constructor(private store: Store) {}

/**
 * Add new Element
 */

  onAdd() {
    this.store.dispatch(new Add());
  }  
}
