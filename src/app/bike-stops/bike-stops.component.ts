import {Component, OnInit} from '@angular/core';
import {BikeStopsService} from './bike-stops.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bike-stops',
  templateUrl: './bike-stops.component.html',
  styleUrls: ['./bike-stops.component.css']
})
export class BikeStopsComponent implements OnInit {
  bikeStops = [];

  constructor(private bikeStopsService: BikeStopsService, private router: Router) {
  }

  navigateToBikeStopDetails(bikeStopId) {
    this.router.navigate(['/bike-stops', bikeStopId]);
  }

  getBikesStop() {
    this.bikeStopsService.getBikesStops()
      .subscribe(response => {
        this.bikeStops = response;
        console.log(response);
      });
  }

  ngOnInit() {
    this.getBikesStop();
  }
}
