import { Component, ElementRef,Inject, OnInit  } from '@angular/core';
import {Cell} from '../interfaces/index'
import { DOCUMENT } from '@angular/common'; 
import {fromEvent, Observable} from 'rxjs';
import * as helpers from './index'
@Component({
  selector: 'app-path-finder',
  templateUrl: './path-finder.component.html',
  styleUrls: ['./path-finder.component.scss']
})
export class PathFinderComponent implements OnInit{
    mouseDownObservable: Observable<Event> = fromEvent(document,'mousedown');
    mouseUpObservable: Observable<Event> = fromEvent(document,'mouseup');

    lastMaze: Cell[] = new Array();
    paintWall: boolean = false;
    paintStart: boolean = false;
    paintEnd: boolean = false;

    mouseDown:boolean = false;

    startCell: Cell|null = null;
    endCell: Cell|null = null;
    solution: Cell[]|null = null;

    ROWS:number = 5;
    COLS:number = 10;
    grid: Cell[] = new Array(this.COLS * this.ROWS).fill({"x": -1,
                                                          "y": -1,
                                                          "visited": false,
                                                          "isWall": false,
                                                          "isStart": false,
                                                          "isEnd": false});
    // constructor(@Inject(DOCUMENT) document: Document){ }

  

  ngOnInit(): void {
    this.subscribeToMouseDownObservable();
    this.subscribeToMouseUpObservable();

    for (let col in this.grid) {
      let j = parseInt(col) % this.COLS;
      this.grid[col] = {...this.grid[col], x: parseInt(col), y: j }
    }


  }
  private subscribeToMouseDownObservable() {
    this.mouseDownObservable.subscribe(() => { 
    if (!this.mouseDown){
      this.mouseDown = true;
      
    }
  
  })

  }

  private subscribeToMouseUpObservable() {
    this.mouseUpObservable.subscribe(() => { 
    if (this.mouseDown){
      this.mouseDown = false;
    }
    
  })

  }



  ngAfterViewInit() {
    
  }

  
}
