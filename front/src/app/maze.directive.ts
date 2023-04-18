import { Directive,ElementRef,Input  } from '@angular/core';

@Directive({
  selector: '[appMaze]'
})
export class MazeDirective {
 @Input() cellNumber : number  = 0;
//  ROWS:number = 30;
//  COLS:number = 50;

  constructor(private el: ElementRef) {
    
    
   }


   ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.position = 'absolute';
    this.el.nativeElement.style.left = ((this.cellNumber / 10) * 20).toString() + 'px';
    this.el.nativeElement.style.top = ((this.cellNumber % 50) * 30 ).toString() + 'px';


   }

}
