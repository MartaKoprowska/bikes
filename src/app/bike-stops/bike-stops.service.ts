import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable()
export class BikeStopsService {
  bikeStops = [];
  url = 'http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe';

  constructor(private httpClient: HttpClient) {
  }

  getBikesStops() {
    return this.httpClient.get(this.url)
      .pipe(
        map( (response: any) => {
          this.bikeStops = response.features;

          this.bikeStops.sort((a, b) => a.properties.label.localeCompare(b.properties.label));


          return this.bikeStops;
        })
      );
  }

  getBikeStop(bikeStopId) {
    for (let i = 0; i < this.bikeStops.length; i++) {
      if (bikeStopId === this.bikeStops[i].id) {
        return this.bikeStops[i];
      }
    }
  }
}
