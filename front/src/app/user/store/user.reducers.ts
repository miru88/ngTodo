import { createReducer, on } from "@ngrx/store";
import * as Actions from './user.actions';
import {User} from '../../interfaces/index'

// export interface UserState {
//     firstName: string | null;
//     lastName: string | null;
//     userName: string | null;
// }

export const initialState: User = {
    username: 'default',
    firstname: 'Gui',
    lastname: 'Gutsy',
    createddate: null
};

// export interface UserState {
//     firstName: string | null;
//     lastName: string | null;
//     userName: string | null;
// }

// export const initialState: UserState = {
//     firstName: 'G SNIPES',
//     lastName: 'G SNIPES',
//     userName: 'G SNIPES'
// }
// export const userReducer = createReducer(
//     initialState,
//     on(Actions.getUser, state => ({...state,
//                                     firstName: state.firstName,
//                                     lastName: state.lastName,
//                                     userName: state.userName }))
// );
export const userReducer = createReducer(
    initialState,
    on(Actions.getUser, (state) => ({...state}))
);