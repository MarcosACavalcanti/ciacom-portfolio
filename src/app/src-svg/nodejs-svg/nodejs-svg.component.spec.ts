import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsSvgComponent } from './nodejs-svg.component';

describe('NodejsSvgComponent', () => {
  let component: NodejsSvgComponent;
  let fixture: ComponentFixture<NodejsSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejsSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodejsSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
