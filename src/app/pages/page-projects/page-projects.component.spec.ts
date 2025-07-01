import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectsComponent } from './page-projects.component';

describe('PageProjectsComponent', () => {
  let component: PageProjectsComponent;
  let fixture: ComponentFixture<PageProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
