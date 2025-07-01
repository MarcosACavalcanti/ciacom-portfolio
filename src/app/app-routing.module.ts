import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioMainComponent } from './pages/portfolio-main/portfolio-main.component';
import { PageAboutMeComponent } from './pages/page-about-me/page-about-me.component';
import { PageContactsComponent } from './pages/page-contacts/page-contacts.component';
import { PageProjectsComponent } from './pages/page-projects/page-projects.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: PortfolioMainComponent},
  {path: "about", component: PageAboutMeComponent},
  {path: "contacts", component: PageContactsComponent},
  {path: "projects", component: PageProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
