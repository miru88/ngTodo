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

    ROWS:number = 20;
    COLS:number = 20;
    grid: Cell[] = new Array(this.COLS * this.ROWS).fill({"x": -1,
                                                          "y": -1,
                                                          "visited": false,
                                                          "isWall": false,
                                                          "isStart": false,
                                                          "isEnd": false});
    
    //constructor(@Inject(DOCUMENT) document: Document){ }
  

  ngOnInit(): void {
    this.subscribeToMouseDownObservable();
    this.subscribeToMouseUpObservable();

    for (let i = 0; i< (this.COLS * this.ROWS); i++) {
      let col = Math.floor(i%this.COLS);
      let row = Math.floor(i/this.COLS);
      
      this.grid[i] = {...this.grid[i], x: row, y: col }
    }
    //console.log(this.grid);
    
  }

//   onCellUpdate(value: Cell) {
//     this.grid[value.index] = {...value}
//  }

  private subscribeToMouseDownObservable() {
    this.mouseDownObservable.subscribe(() => { 
    if (!this.mouseDown){
      this.mouseDown = true;
      //console.log(this.mouseDown)
    }
  
  })

  }

  private subscribeToMouseUpObservable() {
    this.mouseUpObservable.subscribe(() => { 
    if (this.mouseDown){
      this.mouseDown = false;
      //console.log(this.mouseDown)
    }
    
  })

  }



  ngAfterViewInit() {
    
  }

  
}
