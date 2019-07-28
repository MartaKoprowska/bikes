import { TestBed, inject } from '@angular/core/testing';

import { BikeStopsService } from './bike-stops.service';

describe('BikeStopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikeStopsService]
    });
  });

  it('should be created', inject([BikeStopsService], (service: BikeStopsService) => {
    expect(service).toBeTruthy();
  }));
});
