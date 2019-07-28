import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BikeStopsComponent} from "./bike-stops/bike-stops.component";
import {BikeStopComponent} from "./bike-stops/bike-stop/bike-stop.component";

const routes: Routes = [
  {path: '', redirectTo: 'bike-stops', pathMatch: 'full'},
  {path: 'bike-stops', component: BikeStopsComponent},
  {path: 'bike-stops/:id', component: BikeStopComponent}
]
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {
}
