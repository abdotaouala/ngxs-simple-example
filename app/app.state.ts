import { State, Action } from '@ngxs/store';
// add action
export class Add {
  static readonly type = 'Add';
}
// minus action
export class Minus {
  static readonly type = 'Minus';
}

export class ResultStateModel{
  //resultat of count
  result:number;
  //number of click on add button
  nbrAddClick:number;
  //number of click on minus button
  nbrMinusClick:number;
}
//default state
@State<ResultStateModel>({
  name: 'count',
  defaults:{
    result:0,
  nbrAddClick:0,
  nbrMinusClick:0
  }
})
//as reducer in ngrx
export class CountState {

  //what we ganna to do on excute add action
  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState(
      {
      ...state,
          nbrAddClick:state.nbrAddClick + 1,
          result:state.result + 10
      
      }
    );
  }

// what we ganna to do on click in the minus action
  @Action(Minus)
  minus({ getState, setState }) {
    const state = getState();
    setState(
     {
      ...state,
          nbrMinusClick:state.nbrMinusClick + 1,
          result:state.result - 10
      
      }
      );
  }
}
