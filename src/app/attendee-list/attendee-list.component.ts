import { Component, OnInit } from '@angular/core';
import {Attendee} from '../Attendee';
import {Attendees} from '../demo-list';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {
  attendees = Attendees;
  att: Attendee[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
