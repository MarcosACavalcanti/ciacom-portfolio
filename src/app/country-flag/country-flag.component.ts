import { Component, Input, OnInit } from '@angular/core';
import { FlagFactory, FlagSize } from './FlagFactory';

@Component({
  selector: 'flag',
  template: `<div [innerHtml]='svgContent | safeHtml'></div>`,
  styleUrls: ['./country-flag.component.css']
})
export class CountryFlagComponent implements OnInit {
  svgContent: string = "";

  @Input()
  country: string = "";

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
      this.svgContent = FlagFactory.flag(this.country).getSvg(this.flagSize);
  }


}
