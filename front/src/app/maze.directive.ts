import { Directive,ElementRef,Input,Output, HostListener, EventEmitter } from '@angular/core';
import { Cell } from './interfaces';
@Directive({
  selector: '[appMaze]'
})
export class MazeDirective {
 @Input() cell : Cell | null = null;
 @Input() mousedown: boolean = false;
 @Output() cellUpdate = new EventEmitter<Cell>();
  constructor(private el: ElementRef) {
    
    
   }

   @HostListener('mouseenter') onMoustDown(){
      if(this.mousedown) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
      }
   }
   ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'red';

    if(this.cell) {


      this.el.nativeElement.style.left = (this.cell.y * 22 + 300).toString() + 'px';
      this.el.nativeElement.style.top = (this.cell.x * 22+ 150).toString() + 'px';

    }

   }

   onCellUpdate(value: Cell) {
      this.cellUpdate.emit(value);
   }

}
