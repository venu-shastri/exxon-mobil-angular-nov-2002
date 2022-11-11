import { Directive,ElementRef,Renderer2,Input, OnInit,HostListener } from "@angular/core";

@Directive({
    selector:'[hover]'
})
export class HoverDirective implements OnInit{

    @Input()
    hover:string="red";
    @Input()
    hoverColor="blue";
    constructor(private domElementWrapprer:ElementRef,private domApiRef:Renderer2){
        console.log(domElementWrapprer,this.hover);
        

    }
    ngOnInit(): void {
        this.domApiRef.setStyle(this.domElementWrapprer.nativeElement,'color',this.hover);
    }
    @HostListener("mouseenter")
    onTargetMouseOver(){
        this.domApiRef.setStyle(this.domElementWrapprer.nativeElement,'color',this.hoverColor);
    }
    @HostListener("mouseleave")
    onTargetMouseLeave(){
        this.domApiRef.setStyle(this.domElementWrapprer.nativeElement,'color',this.hover);
    }

}