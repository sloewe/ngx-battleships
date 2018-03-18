import * as fromRoot from '../../reducers';
import { Slice } from './harbour.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    harbour: Slice;
}

export const visitHarbour = createFeatureSelector<Slice>('harbour');

export const warshipPlan = createSelector(
    visitHarbour,
    habour => habour.warshipPlan
);

export const position = createSelector(
    visitHarbour,
    habour => habour.position
);

export const all = createSelector(
    warshipPlan,
    position,
    (plan, currentPosition) => ({ plan, currentPosition })
);
