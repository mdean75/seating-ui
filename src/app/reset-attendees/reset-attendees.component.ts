import { Component, OnInit } from '@angular/core';
import {AttendeeService} from '../attendee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-attendees',
  templateUrl: './reset-attendees.component.html',
  styleUrls: ['./reset-attendees.component.css']
})
export class ResetAttendeesComponent implements OnInit {
  attService;
  test;
  router;
  constructor(attService: AttendeeService, router: Router) {this.attService = attService; this.router = router; }

  ngOnInit(): void {
    const r = confirm('Clear meeting attendees?');
    if (r) {
      this.attService.clearAttendees().subscribe(data => {
        this.test = data;
      });
      this.router.navigate(['/']);
    }
  }

}
