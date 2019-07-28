import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStopsComponent } from './bike-stops.component';

describe('BikeStopsComponent', () => {
  let component: BikeStopsComponent;
  let fixture: ComponentFixture<BikeStopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeStopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
