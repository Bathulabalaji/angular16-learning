import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.addClass(this.ele.nativeElement,'highlight-product');
  }
  @HostListener('mouseout') onMouseOut(){
    this.renderer.removeClass(this.ele.nativeElement,'highlight-product');
  }

}
