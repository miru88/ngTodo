import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {User,Todo} from '../interfaces/index';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  // httpGet(url: string): any {
  //   this.http.get("http://localhost:3000/user/3").subscribe(
  //     (response) => { console.log(response)},
  //     (error) => { console.log(error); });
  // }

  fetchUser(user:number){
     return this.http.get<User>(`http://localhost:3000/user/${user}`,{observe: 'body',responseType: 'json'});
            
        
  }

  createUser() {
    
  }

  deleteUser() {

  }

  fetchTodos(user:number) {
    return this.http.get<Todo[]>(`http://localhost:3000/todo/${user}`,{observe: 'body',responseType: 'json'});  
  }
  
}
