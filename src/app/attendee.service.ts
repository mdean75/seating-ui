import { Injectable } from '@angular/core';
import {Attendee} from './attendee';
import {HttpClient} from '@angular/common/http';
import {TestI} from './testI';
import {Observable} from 'rxjs';
import {AttendeeI} from './Attendee-i';
import {Pair} from './pair';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class AttendeeService {
  attendeeArray = [];

  constructor(private http: HttpClient) {

  }

  getChildren() {
    return this.http.get<TestI>('https://seating.bedaring.me/api/attendees')
      .pipe(
        retry(5)
      );
  }

  public  getAttendees(): Observable<Attendee[]> {
    return this.http.get<Attendee[]>('https://seating.bedaring.me/api/attendees')
      .pipe(
        retry(5)
      );
  }

  public  getAppData(): Observable<any> {
    return this.http.get<any>('https://seating.bedaring.me/api/appdata')
      .pipe(
        retry(5)
      );
  }

  public getPairingList(): Observable<Pair[]> {
    return this.http.get<Pair[]>('https://seating.bedaring.me/api/seating')
      .pipe(
        retry(5)
      );
  }

  public getListcount(): Observable<any> {
    return this.http.get<any>('https://seating.bedaring.me/api/count')
      .pipe(
        retry(5)
      );
  }

  public clearAttendees() {
    return this.http.get('https://seating.bedaring.me/api/reset')
      .pipe(
        retry(5)
      );
  }

  public addAttendee(attendee: Attendee) {
    return this.http.get<Attendee>('https://seating.bedaring.me/api/attendee?name=' + attendee.name + '&business=' + attendee.business +
      '&industry=' + attendee.industry )
      .pipe();

  }

  // clearAttendees() {
  //   this.attendeeArray = [];
  //   return this.attendeeArray;
  // }
}
