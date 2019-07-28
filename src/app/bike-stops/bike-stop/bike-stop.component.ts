import {Component, OnInit} from '@angular/core';
import {BikeStopsService} from "../bike-stops.service";
import {ActivatedRoute} from "@angular/router";

import * as L from "leaflet";

@Component({
  selector: 'app-bike-stop',
  templateUrl: './bike-stop.component.html',
  styleUrls: ['./bike-stop.component.css']
})
export class BikeStopComponent implements OnInit {
  routeParamId = this.activeRoute.snapshot.params.id;
  longitude: number;
  latitude: number;
  bikeStop: any;

  constructor(private bikeStopsService: BikeStopsService, private activeRoute: ActivatedRoute) {
  }

  getBikeStop(bikeStopId) {
    return this.bikeStopsService.getBikeStop(bikeStopId);
  }

  createMap() {
    this.longitude = this.bikeStop.geometry.coordinates[0];
    this.latitude = this.bikeStop.geometry.coordinates[1];

    const map = L.map('map').setView([this.latitude, this.longitude], 15);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 15
    }).addTo(map);

    const markerIcon = {
      icon: L.icon({
        iconSize: [20, 20],
        iconUrl: 'assets/png/bike.png'
      })
    };

    L.marker([this.latitude, this.longitude], markerIcon).addTo(map);
  }

  ngOnInit() {
    this.bikeStop = this.getBikeStop(this.routeParamId);
    this.createMap();
  }
}
