import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducers';
import * as userSelectors from './store/user.selector'


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
