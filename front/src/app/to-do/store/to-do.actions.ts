import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/interfaces";

export const getTodos = createAction('[Todo] Get Todos');
export const removeTodos = createAction('[Todo] Remove Todos');
export const getTodosSuccess = createAction('[Todo] Get Todos Success', props<{todos: Todo[]}>());
export const getTodosFailure = createAction('[Todo] Get Todos Failure', props<{error: string}>());
