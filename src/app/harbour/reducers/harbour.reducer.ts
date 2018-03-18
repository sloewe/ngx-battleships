import { Action } from '@ngrx/store';
import { HarbourActions, HarbourActionTypes } from '../actions/harbour.actions';

export interface Slice {

}

export const initialState: Slice = {

};

export function reducer(state = initialState, action: HarbourActions): Slice {
  switch (action.type) {

    case HarbourActionTypes.HarbourAction:
      return state;


    default:
      return state;
  }
}
