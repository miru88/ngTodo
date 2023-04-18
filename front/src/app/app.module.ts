import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoComponent } from 'src/app/to-do/to-do.component';
import { UserComponent} from './user/user.component'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { HttpService } from './http/http.service';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
import {HomeComponent} from './home/home.component';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { userReducer } from './user/store/user.reducers';
import { todoReducer } from './to-do/store/to-do.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './to-do/to-do.effects';
import { PathFinderComponent } from './path-finder/path-finder.component';
import {PathFinderModule} from './path-finder/path-finder.module';
import { MazeDirective } from './maze.directive'
@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    PathFinderComponent,
    MazeDirective
  ],
  imports: [
    PathFinderModule,
    StoreModule,
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'pathFinder', component: PathFinderComponent},
      {path: '', component: HomeComponent},

    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    StoreModule.forRoot({user: userReducer,todos: todoReducer}),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
