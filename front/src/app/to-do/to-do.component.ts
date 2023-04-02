import { Component,Input } from '@angular/core';
import { Todo, AppState } from '../interfaces/index';
import {Store, select} from '@ngrx/store';
import * as todoSelectors from './store';
import { Observable } from 'rxjs';
import * as todoActions from '../to-do/store'
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  todos$: Observable<Todo[]>;
  
  constructor(private store: Store<AppState>){
    this.todos$ = this.store.pipe(select(todoSelectors.selectTodosAll));
  }

  ngOnInit() {
    this.todos$ = this.store.pipe(select(todoSelectors.selectTodosAll));
    this.store.dispatch(todoActions.getTodos());

  }
}
