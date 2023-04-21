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
  gridState: string = 'wall';

}
