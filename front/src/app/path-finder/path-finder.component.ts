import { Component, ElementRef,Inject, OnInit  } from '@angular/core';
import {Cell} from '../interfaces/index'
import { DOCUMENT } from '@angular/common'; 
import {fromEvent, Observable} from 'rxjs';
import * as helpers from './index'
import { PathFinderService } from './path-finder.service';
import { gridState } from '.';
@Component({
  selector: 'app-path-finder',
  templateUrl: './path-finder.component.html',
  styleUrls: ['./path-finder.component.scss']
})
export class PathFinderComponent implements OnInit{
  
    mouseDownObservable: Observable<Event> = fromEvent(document,'mousedown');
    mouseUpObservable: Observable<Event> = fromEvent(document,'mouseup');

    // lastMaze: Cell[] = new Array();
    // paintWall: boolean = false;
    // paintStart: boolean = false;
    // paintEnd: boolean = false;

    mouseDown:boolean = false;

    startCell: Cell|null = null;
    endCell: Cell|null = null;
    solution: Cell[]|null = null;
    state: string = gridState.START;

    ROWS:number = 20;
    COLS:number = 20;
    grid: Cell[][] = new Array(this.COLS * this.ROWS).fill({"x": -1,
                                                          "y": -1,
                                                          "visited": false,
                                                          "isWall": false,
                                                          "isStart": false,
                                                          "isEnd": false});
    
    constructor(private service: PathFinderService){ }
  

  ngOnInit(): void {
    // this.service.resetGrid();// this interrupts draging and coloring
  
    this.grid = this.service.getGrid();
    this.ROWS = this.service.getROWS();
    this.COLS = this.service.getCOLS();
    this.subscribeToMouseDownObservable();
    this.subscribeToMouseUpObservable();

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

  handleLeftClick(index: number) {
    //console.log(index);
  }

  handleUpdateGrid() {
    this.grid = this.service.getGrid();
    this.state = this.service.getState();
  }
}
