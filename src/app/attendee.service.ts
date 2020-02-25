import { Injectable } from '@angular/core';
import {Attendee} from './attendee';
import {HttpClient} from '@angular/common/http';
import {TestI} from './testI';

@Injectable({
  providedIn: 'root'
})
export class AttendeeService {
  attendeeArray = [];

  constructor(private http: HttpClient) {

  }

  getChildren() {
    return this.http.get<TestI>('https://jsonplaceholder.typicode.com/todos/1');
  }

  getAttendees() {
    return this.attendeeArray;
  }

  addAttendee(att) {
    this.attendeeArray.push(att);
  }

  clearAttendees() {
    this.attendeeArray = [];
    return this.attendeeArray;
  }
}
