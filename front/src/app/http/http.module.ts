import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { HttpService } from './http.service';

@NgModule({
  providers: [
    HttpService
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class HttpModule { }
