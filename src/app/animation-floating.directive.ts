import { Directive, ElementRef, HostBinding, inject } from '@angular/core';

@Directive({
  selector: '[appAnimationFloating]',
})
export class AnimationFloatingDirective {
  private el = inject(ElementRef);

  @HostBinding('class')
  elementClass = 'float-animation'

  constructor() { 
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.padding = '4px';
    this.el.nativeElement.class = 'float-animation'
    console.log(this.el.nativeElement.getBoundingClientRect());
  }

}
