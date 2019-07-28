import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStopComponent } from './bike-stop.component';

describe('BikeStopComponent', () => {
  let component: BikeStopComponent;
  let fixture: ComponentFixture<BikeStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
