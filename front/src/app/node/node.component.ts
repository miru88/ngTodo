import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @Input() isWall: boolean  = false;
  @Input()isStart: boolean = false;
  @Input()isEnd: boolean = false;
  @Input() mouseDown = false;
  gridState: string = 'wall';

  handleLeftClick() {
    //console.log('ree');
    this.toggleWall();
  }
  onMouseEnter() {
    if(this.mouseDown) {
      this.isWall = !this.isWall;
    }
  }
  toggleWall() {
    this.isWall = !this.isWall;
    console.log(this.isWall);
  }

}
