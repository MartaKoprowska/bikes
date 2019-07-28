import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bike-stop-details',
  templateUrl: './bike-stop-details.component.html',
  styleUrls: ['./bike-stop-details.component.css']
})
export class BikeStopDetailsComponent implements OnInit {
  @Input() bikeStop;

  constructor() { }

  ngOnInit() {
  }

}
