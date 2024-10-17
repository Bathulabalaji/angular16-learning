import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackground{
    // private element:ElementRef;
    // @Input('setBackground') bgColor:string="gray";
    // @Input() textColor:string="white";
    // @Input() title:string="this is demo title";

    @Input('setBackground') textAndBgColor={backColor:"black",textColor:"white"}

    constructor(private ele:ElementRef, private renderer:Renderer2){
        // this.element=ele;
    }
    ngOnInit(){
        // this.ele.nativeElement.style.backgroundColor="#36454f";
        // this.ele.nativeElement.style.color="white";
        this.renderer.setStyle(this.ele.nativeElement,"backgroundColor",this.textAndBgColor.backColor);
        this.renderer.setStyle(this.ele.nativeElement,"color",this.textAndBgColor.textColor);
        // this.renderer.setAttribute(this.ele.nativeElement,"title",this.title);
    }
}
