import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do.component';
import {Store,select } from '@ngrx/store';


@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToDoModule { }
