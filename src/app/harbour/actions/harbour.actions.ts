import { Action } from '@ngrx/store';
import {BattleFieldPosition, IProvideWarshipPlan} from '../../lib/battleships/contracts';

export enum HarbourActionTypes {
  ChooseWarshipPlan = '[Harbour] Choose Warship Plan',
  ChooseWarshipPlanSuccess = '[Harbour] Choose Warship Plan Success',
  UpdateWarshipPosition = '[Harbour] Update Warship Position',
  UpdateWarshipPositionSuccess = '[Harbour] Update Warship Position Success',
  RecoverWarshipPlan = '[Harbour] Recover Warship Plan',
  RecoverWarshipPlanSuccess = '[Harbour] Recover Warship Plan Success'
}

export class RecoverWarshipPlan implements Action {
  readonly type = HarbourActionTypes.RecoverWarshipPlan;
}

export class RecoverWarshipPlanSuccess implements Action {
  readonly type = HarbourActionTypes.RecoverWarshipPlanSuccess;

    constructor(public payload: IProvideWarshipPlan) {}
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

export type HarbourActions = RecoverWarshipPlan
    | RecoverWarshipPlanSuccess
    | ChooseWarshipPlan
    | ChooseWarshipPlanSuccess
    | UpdateWarshipPosition
    | UpdateWarshipPositionSuccess;
