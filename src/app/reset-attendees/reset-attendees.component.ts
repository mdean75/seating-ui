import { Component, OnInit } from '@angular/core';
import {AttendeeService} from '../attendee.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-attendees',
  templateUrl: './reset-attendees.component.html',
  styleUrls: ['./reset-attendees.component.css']
})
export class ResetAttendeesComponent implements OnInit {
  attService;
  test;
  router;
  constructor(attService: AttendeeService, router: Router, public sb: MatSnackBar) {this.attService = attService; this.router = router; }

  ngOnInit(): void {
    const r = confirm('Clear meeting attendees?');
    if (r) {
      this.attService.clearAttendees().subscribe(data => {
        this.test = data;
      });
    }
    this.openSnackBar('Meeting attendees cleared', '');
    this.router.navigate(['/']);
  }
  openSnackBar(message: string, action: string) {
    this.sb.open(message, action, {
      duration: 3000,
    });
  }

}
