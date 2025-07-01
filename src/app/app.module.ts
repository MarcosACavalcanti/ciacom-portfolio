import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgComponent } from './src-svg/angular-svg/angular-svg.component';
import { MongoDbSvgComponent } from './src-svg/mongo-db-svg/mongo-db-svg.component';
import { NodejsSvgComponent } from './src-svg/nodejs-svg/nodejs-svg.component';
import { AnimationFloatingDirective } from './animation-floating.directive';
import { AnimationTestComponent } from './animation-test/animation-test.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PageAboutMeComponent } from './pages/page-about-me/page-about-me.component';
import { PageContactsComponent } from './pages/page-contacts/page-contacts.component';
import { PageProjectsComponent } from './pages/page-projects/page-projects.component';
import { PortfolioMainComponent } from './pages/portfolio-main/portfolio-main.component';
import { BrazilFlagComponent } from './flags/brazil-flag/brazil-flag.component';
import { UsaFlagComponent } from './flags/usa-flag/usa-flag.component';
import { Observable, of } from 'rxjs';
import { LanguagesFactory } from './languages';

export function HttpLoaderFactory(http: HttpClient){
  
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class GetTranslateDefault implements TranslateLoader{
  getTranslation(lang: string): Observable<any> {
    return of(new LanguagesFactory(lang).getLanguage());
  }
  
}

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeaderComponent,
    PortfolioMainComponent,
    BrazilFlagComponent,
    UsaFlagComponent,
    AngularSvgComponent,
    NodejsSvgComponent,
    MongoDbSvgComponent,
    NodejsSvgComponent,
    AnimationFloatingDirective,
    AnimationTestComponent,
    PageAboutMeComponent,
    PageContactsComponent,
    PageAboutMeComponent,
    PageProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: GetTranslateDefault,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
