import { Injectable } from '@angular/core';
import { Cell } from '../interfaces';
import { gridState } from '.';
@Injectable({
  providedIn: 'root'
})
export class PathFinderService {
  ROWS:number = 20;
  COLS:number = 20;
  startPlaced = false;
  endPlaced = false;
  state:string = 'idle';
  grid: Cell[][] = new Array(this.COLS * this.ROWS).fill({"x": -1,
                                                          "y": -1,
                                                          "visited": false,
                                                          "isWall": false,
                                                          "isStart": false,
                                                          "isEnd": false});
  constructor() { }

  test() {
    console.log('test worked');
  }

  initGrid(){
    this.resetGrid();
  }

  resetGrid() {
    this.state = gridState.START;
    for(let row of this.grid) {
      for(let node of row) {
        node.visited = false;
        node.isWall = false;
        node.isStart = false;
        node.isEnd = false;
      }
    }
  }
  getGrid(){
    return this.grid;
  }
  getROWS() {
    return this.ROWS;
  }
  getCOLS() {
    return this.COLS;
  }
  getState() {
    return this.state;
  }
}
