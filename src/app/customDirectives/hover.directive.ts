import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private ele:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor:string="pink";
  @HostBinding('style.color') color:string="black";
  @HostBinding('style.border') border:string="none";

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor="#34364f";
    this.color="white";
    this.border="1px solid red";
  }
  @HostListener('mouseout') onMouseOut(){
    this.backgroundColor="pink";
    this.color="black";
    this.border="none";
  }
}
