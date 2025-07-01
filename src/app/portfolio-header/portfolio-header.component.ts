import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent {

  constructor(private _translateService: TranslateService, private _router: Router){
    this._translateService.setDefaultLang('en');
  }

  goTo(page: String){
    this._router.navigate([page])
  }

  changeLanguage(language: string){
    switch (language){
      case 'portuguese':
        console.log('teste');
        this._translateService.use('pt');
        break;
      case 'english':
        this._translateService.use('en');
        break;
      default:
        this._translateService.use('en');
        break;
    }
  }
}
