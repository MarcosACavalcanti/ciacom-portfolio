import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-flag',
  template: `<div [innerHtml]='svgContent | safeHtml'></div>`,
  styleUrls: ['./country-flag.component.css']
})
export class CountryFlagComponent {
  svgContent: string = "";

  @Input()
  svrtext: String = "";

  constructor(public http : HttpClient){
    this.loadSvg('teste');
  }


  loadSvg(flag: String){
    const path = `./assets/flags/brazil-flag.component.svg`;
    this.http.get(path, { responseType: 'text' }).subscribe(svg => {
      console.log(svg)
      this.svgContent = svg;
    });
  }


}
