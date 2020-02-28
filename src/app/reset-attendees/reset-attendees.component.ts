import { Component, OnInit } from '@angular/core';
import {AttendeeService} from '../attendee.service';

@Component({
  selector: 'app-reset-attendees',
  templateUrl: './reset-attendees.component.html',
  styleUrls: ['./reset-attendees.component.css']
})
export class ResetAttendeesComponent implements OnInit {
  attService;
  test;
  constructor(attService: AttendeeService) {this.attService = attService; }

  ngOnInit(): void {
    this.attService.clearAttendees().subscribe(data => {
      this.test = data;
    });
  }

}
