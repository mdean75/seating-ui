import { Injectable } from '@angular/core';
import {Attendee} from './attendee';
import {HttpClient} from '@angular/common/http';
import {TestI} from './testI';
import {Observable} from 'rxjs';
import {AttendeeI} from './Attendee-i';

@Injectable()
export class AttendeeService {
  attendeeArray = [];

  constructor(private http: HttpClient) {

  }

  getChildren() {
    return this.http.get<TestI>('https://seating.bedaring.me/api/attendees');
  }

  public  getAttendees(): Observable<Attendee[]> {
    return this.http.get<Attendee[]>('https://seating.bedaring.me/api/attendees');
  }

  addAttendee(att) {
    this.attendeeArray.push(att);
  }

  clearAttendees() {
    this.attendeeArray = [];
    return this.attendeeArray;
  }
}
