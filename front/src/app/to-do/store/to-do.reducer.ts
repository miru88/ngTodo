import * as todoActions from './to-do.actions';
import { createReducer, on } from '@ngrx/store';
import {Todo} from '../../interfaces/index'



export const initialState: Todo[] = [
    {id: 123,
     message: 'Aw yis',
     createddate: null,
     userid: 123
    },
    {id: 123,
        message: 'Aw yis',
        createddate: null,
        userid: 123
       },
       {id: 123,
        message: 'Ree',
        createddate: null,
        userid: 123
       }
]


export const todoReducer = createReducer(
    initialState,
    on(todoActions.getTodos, (state) => ([...state])),
    on(todoActions.getTodosSuccess, (state,action) => ({
    ...state,
    todos: action.todos
    })),
    on(todoActions.getTodosFailure, (state,action) => ({...state,error: action.error}))
)
