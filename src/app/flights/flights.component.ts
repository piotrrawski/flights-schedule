import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FLIGHTS } from '../mock-flights';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements ngOnInit {

  flights = FLIGHTS;

  selectedFlight: Flight;

  onSelect(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
