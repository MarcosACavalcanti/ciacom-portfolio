import { Component, Input, OnInit } from '@angular/core';
import { FlagFactory, FlagSize } from './FlagFactory';

@Component({
  selector: 'app-country-flag',
  template: `<div [innerHtml]='svgContent | safeHtml'></div>`,
  styleUrls: ['./country-flag.component.css']
})
export class CountryFlagComponent implements OnInit {
  svgContent: string = "";

  @Input()
  svgText: string = "";

  @Input()
  flagSize: FlagSize = {
    width: 25,
    height: 25
  };

  constructor(){}

  ngOnInit(): void {
    this.loadSvg();
  }


  loadSvg(){
      this.svgContent = FlagFactory.flag(this.svgText).getSvg(this.flagSize);
  }


}
