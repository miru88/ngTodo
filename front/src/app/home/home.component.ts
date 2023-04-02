import { Component } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Todo } from '../interfaces/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'to-do';
  numbers: number[];
  //user: any;
  todos: any;
  value: number =-1;
  constructor(
    private httpService: HttpService
  ) {
    this.numbers = Array(5).fill(0).map((x,i) => i);
  }
  
 ngOnInit() {
    this.todos = this.httpService.fetchTodos(1).subscribe(
      (body: Todo[]) => {this.todos = body;});

    // this.user = this.httpService.fetchUser(1).subscribe(
    //   (body) => {this.user = body;}
    // );

  }


  onEnterKey(event: any){
    this.value = event.target.value;
    if(this.value)
    {
      this.todos = this.httpService.fetchTodos(this.value).subscribe(
        (body: Todo[]) => {this.todos = body;});
      
    //   this.user = this.httpService.fetchUser(this.value).subscribe(
    //   (body) => {this.user = body;}
    // );
    }
  }
}
