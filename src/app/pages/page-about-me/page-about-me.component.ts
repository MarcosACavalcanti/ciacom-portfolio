import { Component } from '@angular/core';

@Component({
  selector: 'app-page-about-me',
  templateUrl: './page-about-me.component.html',
  styleUrls: ['./page-about-me.component.css']
})
export class PageAboutMeComponent {
  techSkills: string[] = [
    'NodeJS',
    'Angular',
    'Express',
    'NestJS',
    'NX',
    'MongoDB',
  ];

  experiences: string[] = [
    'Software Engineer | PureSpectrum |  2020 ~',
    'Analista de Sistemas Pleno | BRQ Digital Solutions |  2018 - 2020',
    'Intern | Korp Sistemas de gestão |  2018',
  ];
}
