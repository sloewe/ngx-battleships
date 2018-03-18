import { Action } from '@ngrx/store';
import {BattleFieldPosition, IProvideWarshipPlan} from '../../lib/battleships/contracts';

export enum HarbourActionTypes {
  HarbourAction = '[Harbour] Action',
  ChooseWarshipPlan = '[Harbour] Choose Warship Plan',
  UpdateWarshipPosition = '[Harbour] Update Warship Position'
}

export class Harbour implements Action {
  readonly type = HarbourActionTypes.HarbourAction;
}

export class ChooseWarshipPlan implements Action {
  readonly type = HarbourActionTypes.ChooseWarshipPlan;

  constructor(public payload: IProvideWarshipPlan) {}
}

export class UpdateWarshipPosition implements Action {
  readonly type = HarbourActionTypes.UpdateWarshipPosition;

  constructor(public payload: BattleFieldPosition[]) {}
}

export type HarbourActions = Harbour | ChooseWarshipPlan | UpdateWarshipPosition;
