import { createSelector, createFeatureSelector } from '@ngrx/store';
import {User, Todo, AppState} from '../../interfaces/index';

export const featureKey = 'user';
export const selectFeature = createFeatureSelector<User>(featureKey);

export const selectUser = (state: AppState) => state.user;

export const selectFeatureFirstName = createSelector(
    selectUser,
    (state: User) => state.firstname
)
export const selectFeatureLastName = createSelector(
    selectUser,
    (state: User) => state.lastname
)
export const selectFeatureUserName = createSelector(
    selectUser,
    (state: User) => state.username
)
