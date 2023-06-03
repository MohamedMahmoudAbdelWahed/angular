import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective implements OnChanges {
  constructor(private element:ElementRef) {
    this.element.nativeElement.style.boxShadow="8px 10px 10px 8px rgb(60, 60, 60)";
  }
  @HostListener ('mouseover') funcShadowOver(){
    this.element.nativeElement.style.boxShadow = "5px 5px 5px 5px rgb(180, 180, 180)";
    this.element.nativeElement.style.opacity = "0.7";

  }
  @HostListener ('mouseout') funcShadowOut(){
    this.element.nativeElement.style.boxShadow = "8px 10px 10px 8px rgb(60, 60, 60)";
    this.element.nativeElement.style.opacity = "1";


  }
  @Input("ProductCard") radius1 : string ="0.3";
  ngOnChanges(): void {
    this.element.nativeElement.style.boxShadow ="7px 7px rgb(201, 76, 76)" ;
    this.element.nativeElement.style.opacity = `${this.radius1}`;
  }
}
