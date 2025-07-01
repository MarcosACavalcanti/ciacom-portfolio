import { Component, ComponentRef, ElementRef, Renderer2, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { AngularSvgComponent } from '../src-svg/angular-svg/angular-svg.component';

@Component({
  selector: 'app-animation-test',
  template: '<ng-container #container></ng-container>',
  styleUrls: ['./animation-test.component.css']
})
export class AnimationTestComponent {

  @ViewChild('container',{read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  componentRef!: ComponentRef<AngularSvgComponent>;

  ngOnInit(): void {
    this.viewContainer.clear();
  }

}
