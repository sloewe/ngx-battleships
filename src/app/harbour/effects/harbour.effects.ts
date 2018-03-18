import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {ChooseWarshipPlan, ChooseWarshipPlanSuccess, HarbourActions, HarbourActionTypes} from '../actions/harbour.actions';
import { switchMap, map } from 'rxjs/operators';
import {LocalStorage} from '../../lib/local-storage';

@Injectable()
export class HarbourEffects {

  @Effect()
  effect$ = this.actions$
      .pipe(
          ofType(HarbourActionTypes.ChooseWarshipPlan),
          switchMap((action: ChooseWarshipPlan) =>
              this._storage.set('current-plan', action.payload).pipe(
                  map(warshipPlan => new ChooseWarshipPlanSuccess(warshipPlan))
              )
          )
      );

  constructor(private actions$: Actions, private _storage: LocalStorage) {}
}
