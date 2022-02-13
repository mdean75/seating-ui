import {Component, NgModule, OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Attendee} from './attendee';
import {AttendeeService} from './attendee.service';
import {Pair} from './pair';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';


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
  test2;
  constructor(attService: AttendeeService, router: Router, public http: HttpClient) {
    this.attService = attService; this.router = router; this.router.navigate(['']);
  }
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

  initDemo() {
    console.log('initDemo()');
    // this.attService.loadDemo().subscribe(data => {
    //   this.test2 = data;
    // });
    const eventId = localStorage.getItem('event');
    this.http.post(`${environment.seatingAPI}/${eventId}/demo`, null).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/']);
  }
}
