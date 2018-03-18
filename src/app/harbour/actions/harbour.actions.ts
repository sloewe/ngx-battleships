import { Action } from '@ngrx/store';
import {BattleFieldPosition, IProvideWarshipPlan} from '../../lib/battleships/contracts';

export enum HarbourActionTypes {
  HarbourAction = '[Harbour] Action',
  ChooseWarshipPlan = '[Harbour] Choose Warship Plan',
  ChooseWarshipPlanSuccess = '[Harbour] Choose Warship Plan Success',
  UpdateWarshipPosition = '[Harbour] Update Warship Position',
  UpdateWarshipPositionSuccess = '[Harbour] Update Warship Position Success'
}

export class Harbour implements Action {
  readonly type = HarbourActionTypes.HarbourAction;
}

export class ChooseWarshipPlan implements Action {
  readonly type = HarbourActionTypes.ChooseWarshipPlan;

  constructor(public payload: IProvideWarshipPlan) {}
}

export class ChooseWarshipPlanSuccess implements Action {
    readonly type = HarbourActionTypes.ChooseWarshipPlanSuccess;

    constructor(public payload: IProvideWarshipPlan) {}
}

export class UpdateWarshipPosition implements Action {
  readonly type = HarbourActionTypes.UpdateWarshipPosition;

  constructor(public payload: BattleFieldPosition[]) {}
}

export class UpdateWarshipPositionSuccess implements Action {
  readonly type = HarbourActionTypes.UpdateWarshipPositionSuccess;

  constructor(public payload: BattleFieldPosition[]) {}
}

export type HarbourActions = Harbour | ChooseWarshipPlan | ChooseWarshipPlanSuccess | UpdateWarshipPosition | UpdateWarshipPositionSuccess;
