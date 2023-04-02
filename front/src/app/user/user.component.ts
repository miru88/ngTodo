import { Component,Input  } from '@angular/core';
import * as userSelectors from './store/user.selector'
import {Store,select } from '@ngrx/store';
import {Observable} from 'rxjs';
import { AppState } from '../interfaces';
//import {UserState} from './store/user.reducers'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  username$: Observable<string | null>
  firstname$: Observable<string | null>
  lastname$: Observable<string | null>


  
 
  constructor(private store: Store<AppState>) {
    this.username$ = this.store.pipe(select(userSelectors.selectFeatureUserName));
    this.firstname$ = this.store.pipe(select(userSelectors.selectFeatureFirstName));
    this.lastname$ = this.store.pipe(select(userSelectors.selectFeatureLastName));
  }

  ngOnInit() {
    this.username$ = this.store.pipe(select(userSelectors.selectFeatureUserName));
    this.firstname$ = this.store.pipe(select(userSelectors.selectFeatureFirstName));
    this.lastname$ = this.store.pipe(select(userSelectors.selectFeatureLastName));
  }

    
}
