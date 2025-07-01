import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazilFlagComponent } from './brazil-flag.component';

describe('BrazilFlagComponent', () => {
  let component: BrazilFlagComponent;
  let fixture: ComponentFixture<BrazilFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrazilFlagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrazilFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
