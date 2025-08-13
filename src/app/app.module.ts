import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { AppComponent } from "./app.component";
import { PortfolioHeaderComponent } from "./portfolio-header/portfolio-header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { PageAboutMeComponent } from "./pages/page-about-me/page-about-me.component";
import { PageContactsComponent } from "./pages/page-contacts/page-contacts.component";
import { PageProjectsComponent } from "./pages/page-projects/page-projects.component";
import { PortfolioMainComponent } from "./pages/portfolio-main/portfolio-main.component";
import { Observable, of } from "rxjs";
import { LanguagesFactory } from "./languages";
import { SafePipe } from "./safe.pipe";
import { SvgIconComponent } from "./svg-icon/svg-icon.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export class GetTranslateDefault implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(new LanguagesFactory(lang).getLanguage());
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeaderComponent,
    PortfolioMainComponent,
    PageAboutMeComponent,
    PageContactsComponent,
    PageAboutMeComponent,
    PageProjectsComponent,
    SafePipe,
    SvgIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useClass: GetTranslateDefault,
      },
    }),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
