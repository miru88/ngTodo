import { createSelector,createFeatureSelector } from "@ngrx/store";
import { Todo,AppState} from "src/app/interfaces";


export const featureTodos = 'todos';
export const selectFeature = createFeatureSelector<Todo[]>(featureTodos);
export const selectTodos = (state:AppState) => state.todos; 
export const selectTodosAll = createSelector(
    selectTodos
    ,(state) => [...state]
    )