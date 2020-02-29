import {Component, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Attendee} from './attendee';
import {AttendeeService} from './attendee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static atts: Attendee[] = [];
  title = 'OCOC Morning Schmooze Pair Up';
  attService;
  test;
  constructor(attService: AttendeeService) {this.attService = attService; }
  public getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  reset() {
    this.attService.clearAttendees().subscribe(data => {
      this.test = data.valueOf();
    });
  }
}
