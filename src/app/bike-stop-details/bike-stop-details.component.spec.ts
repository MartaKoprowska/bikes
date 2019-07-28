import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStopDetailsComponent } from './bike-stop-details.component';

describe('BikeStopDetailsComponent', () => {
  let component: BikeStopDetailsComponent;
  let fixture: ComponentFixture<BikeStopDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeStopDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
