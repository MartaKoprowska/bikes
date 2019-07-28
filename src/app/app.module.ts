import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BikeStopsComponent} from './bike-stops/bike-stops.component';
import {BikeStopsService} from './bike-stops/bike-stops.service';
import {AppRoutingModule} from './/app-routing.module';
import {BikeStopComponent} from './bike-stops/bike-stop/bike-stop.component';
import {BikeStopDetailsComponent} from './bike-stop-details/bike-stop-details.component';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    BikeStopsComponent,
    BikeStopComponent,
    BikeStopDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BikeStopsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
