import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    ChooseWarshipPlan,
    ChooseWarshipPlanSuccess,
    HarbourActionTypes,
    UpdateWarshipPosition,
    UpdateWarshipPositionSuccess
} from '../actions/harbour.actions';
import { switchMap, map } from 'rxjs/operators';
import { LocalStorage } from '../../lib/local-storage';

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

    @Effect()
    updateWarshipPositionEffect$ = this.actions$
        .pipe(
            ofType(HarbourActionTypes.UpdateWarshipPosition),
            switchMap((action: UpdateWarshipPosition) =>
                this._storage.set('current-position', action.payload).pipe(
                    map(position => new UpdateWarshipPositionSuccess(position))
                )
            )
        );

  constructor(private actions$: Actions, private _storage: LocalStorage) {}
}
