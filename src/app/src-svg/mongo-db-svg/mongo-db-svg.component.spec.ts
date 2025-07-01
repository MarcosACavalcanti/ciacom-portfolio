import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDbSvgComponent } from './mongo-db-svg.component';

describe('MongoDbSvgComponent', () => {
  let component: MongoDbSvgComponent;
  let fixture: ComponentFixture<MongoDbSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongoDbSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongoDbSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
