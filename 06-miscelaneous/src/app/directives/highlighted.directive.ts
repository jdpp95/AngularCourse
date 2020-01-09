import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(
    private element:ElementRef
  ) { 
    console.log("Highlight directive called.");
  }

  @Input("appHighlighted") newColor:string;

  @HostListener('mouseenter') mouseEntered(){
    this.highlight(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mouseLeaved(){
    this.highlight(null);
  }

  private highlight(color:string){
    this.element.nativeElement.style.backgroundColor = color;
  }
}
