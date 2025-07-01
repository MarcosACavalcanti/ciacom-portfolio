import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSvgComponent } from './angular-svg.component';

describe('AngularSvgComponent', () => {
  let component: AngularSvgComponent;
  let fixture: ComponentFixture<AngularSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
