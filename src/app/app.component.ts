import {Component, NgModule, OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Attendee} from './attendee';
import {AttendeeService} from './attendee.service';
import {Pair} from './pair';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public static atts: Attendee[] = [];
  title = 'OCOC Morning Schmooze Pair Up';
  attService;
  test;
  count;
  router;
  constructor(attService: AttendeeService, router: Router) {this.attService = attService; this.router = router; }
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

  ngOnInit(): void {
    this.router.navigate(['']);
    this.attService.getListcount().subscribe(data => {
      this.count = data.valueOf('ListCount');
    });
  }
}
