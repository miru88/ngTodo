import { Component, ElementRef,Inject, OnInit  } from '@angular/core';
import {Cell} from '../interfaces/index'
import { DOCUMENT } from '@angular/common'; 
import {fromEvent, Observable} from 'rxjs';
@Component({
  selector: 'app-path-finder',
  templateUrl: './path-finder.component.html',
  styleUrls: ['./path-finder.component.scss']
})
export class PathFinderComponent implements OnInit{
    clickObservable: Observable<Event> = fromEvent(document,'click');
    lastMaze: Cell[][] = new Array();
    paintWall: boolean = false;
    paintStart: boolean = false;
    paintEnd: boolean = false;

    mouseDown:boolean = false;

    startCell: Cell|null = null;
    endCell: Cell|null = null;
    solution: Cell[]|null = null;

    ROWS:number = 15;
    COLS:number = 25;
    grid: Cell[][] = new Array(this.ROWS).fill(new Array(this.COLS).fill({"x": -1,
                                                                          "y": -1,
                                                                          "visited": false,
                                                                          "isWall": false,
                                                                          "isStart": false,
                                                                          "isEnd": false}));
    // constructor(@Inject(DOCUMENT) document: Document){ }

  onStart() {
    console.log("start");
    
  }
  onReset() {
    console.log("reset");
  }
  onRepeat() {
    console.log("repeat");
  }
  onClick(event: any){
    let target = event.target;
    let square = document.getElementById(target.id);
    var bgColor = 'red';
    if(square){
      square.style.backgroundColor = bgColor;
    }


  }

  ngOnInit(): void {
    this.subscribeToObservable();
  }
  private subscribeToObservable() {
    this.clickObservable.subscribe(() => { 
    console.log(`The dom has been clicked!`);
  })
}
  ngAfterViewInit() {
    
  }

  
}
