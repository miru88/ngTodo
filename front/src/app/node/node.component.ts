import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges  } from '@angular/core';
import { PathFinderService } from '../path-finder/path-finder.service';
import { gridState } from '../path-finder';
@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @Input() state:string = 'idle';
  @Input() isWall: boolean  = false;
  @Input() isStart: boolean = false;
  @Input() isEnd: boolean = false;
  @Input() mouseDown = false;
  @Input() gridIndex: number = -1;
  @Input() x:number = -1;
  @Input() y:number = -1;
  @Output() gridIndexChange = new EventEmitter<number>();
  @Output() updateGrid = new EventEmitter<void>();
  

  constructor(private service: PathFinderService) {}
  
  onMouseUp() {
    this.updateGrid.emit();
  }
  handleLeftClick() {
    if(this.state === gridState.START) {
        this.toggleStart();
    }
    else if(this.state === gridState.END) {
        this.toggleEnd();
    }
    else {
      this.toggleWall();
    }
    
    this.gridIndexChange.emit(this.gridIndex);
  }
  onMouseEnter() {
    if(this.state === gridState.WALL && this.mouseDown) {
      this.toggleWall();
    }
  }
  toggleWall() {
    this.isWall = !this.isWall;
  }
  toggleStart() {
    this.setFalseAll();
    this.isStart = true;
  }

  toggleEnd() {
    this.setFalseAll();
    this.isEnd = true;
  }

  gridIndexReminder() {
    this.gridIndexChange.emit(this.gridIndex);
  }

  setFalseAll() {
    this.isWall = false;
    this.isEnd = false;
    this.isStart = false;
  }
  ngOnChanges(changes: SimpleChanges) {
    if(this.x === 0 && this.y === 0)
    {
      
      console.log(changes)
    }
    
  }
}
