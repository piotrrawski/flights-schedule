import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    "../assets/css/fonts.css"
  ]
})
export class AppComponent {
  title = 'Angular Flights';

  public sampleHeaders = ["flight", "sch. date", "sch.time", "o/d", "registration"];
}
