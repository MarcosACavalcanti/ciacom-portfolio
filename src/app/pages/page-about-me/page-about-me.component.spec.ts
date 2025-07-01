import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeComponent } from './page-about-me.component';

describe('PageAboutMeComponent', () => {
  let component: PageAboutMeComponent;
  let fixture: ComponentFixture<PageAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
