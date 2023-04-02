import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, exhaustAll,of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {HttpService} from '../http/http.service';
import * as todoActions from './store/'


@Injectable()
export class TodoEffects {

    loadTodos$ = createEffect(() => 
    this.actions$.pipe(ofType(todoActions.getTodos),
    mergeMap(() => {
        return this.httpService
        .fetchTodos(3)
        .pipe(map((todos) => todoActions.getTodosSuccess({todos})),
        catchError(error => of(todoActions.getTodosFailure({error: error.message}))))})));



    constructor(private actions$: Actions,
        private httpService: HttpService
        ){}


        

}