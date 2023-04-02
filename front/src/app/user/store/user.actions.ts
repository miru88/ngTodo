import {  createAction,props } from '@ngrx/store';

export const getUser = createAction(
    '[User] Get User');

// export const getUser = createAction(
//     '[User] Get User',
//     props<{username: string; password: string}>());