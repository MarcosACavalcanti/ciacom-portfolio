import { Component, Input, OnInit } from '@angular/core';
import { SvgIconFactory } from './SvgIconFactory';

@Component({
  selector: 'svg-icon',
  template: `<div [innerHtml]="svgContent | safeHtml"></div>`,
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent implements OnInit {
  svgContent: string = '';

  @Input() icon: string = '';
  @Input() width: number = 30;
  @Input() height: number = 30;

  ngOnInit(): void {
    this.svgContent = new SvgIconFactory(this.icon).getSvg({ width: this.width, height: this.height });
  }
}
