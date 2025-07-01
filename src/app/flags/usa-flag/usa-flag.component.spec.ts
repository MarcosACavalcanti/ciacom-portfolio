import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaFlagComponent } from './usa-flag.component';

describe('UsaFlagComponent', () => {
  let component: UsaFlagComponent;
  let fixture: ComponentFixture<UsaFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaFlagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsaFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
