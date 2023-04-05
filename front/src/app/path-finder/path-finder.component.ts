import { Component, ElementRef,Inject } from '@angular/core';
import {Cell} from '../interfaces/index'
import { DOCUMENT } from '@angular/common'; 
@Component({
  selector: 'app-path-finder',
  templateUrl: './path-finder.component.html',
  styleUrls: ['./path-finder.component.scss']
})
export class PathFinderComponent {
    ROWS:number = 15;
    COLS:number = 25;
    grid: Cell[][] = new Array(this.ROWS).fill(new Array(this.COLS).fill({"visited": false,
                                                                          "isWall": false,
                                                                          "isStart": false,
                                                                          "isEnd": false}));
    constructor(@Inject(DOCUMENT) document: Document){ }

  onStart(){
    console.log("start");
    let square = document.getElementById('cell-0-0');
    var bgColor = 'red';
    if(square){
      square.style.backgroundColor = bgColor;
    }
  }
  onReset(){
    console.log("reset");
  }
  onRepeat(){
    console.log("repeat");
  }

  ngOnInit(){
   
    
  }
}
