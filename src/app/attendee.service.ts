import { Injectable } from '@angular/core';
import {Attendee} from './attendee';
import {HttpClient} from '@angular/common/http';
import {TestI} from './testI';
import {Observable} from 'rxjs';
import {AttendeeI} from './Attendee-i';
import {Pair} from './pair';
import {catchError, retry} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable()
export class AttendeeService {
  attendeeArray = [];

  constructor(private http: HttpClient) {

  }

  getChildren() {
    // api = `${environment.seatingAPI}`
    return this.http.get<TestI>(`${environment.seatingAPI}/api/attendees`)
      .pipe(
        retry(5)
      );
  }

  public  getAttendees(): Observable<Attendee[]> {
    return this.http.get<Attendee[]>(`${environment.seatingAPI}/api/attendees`)
      .pipe(
        retry(5)
      );
  }

  public  getAppData(): Observable<any> {
    return this.http.get<any>(`${environment.seatingAPI}/api/appdata`)
      .pipe(
        retry(5)
      );
  }

  public getPairingList(): Observable<Pair[]> {
    return this.http.get<Pair[]>(`${environment.seatingAPI}/api/seating`)
      .pipe(
        retry(5)
      );
  }

  public getListcount(): Observable<any> {
    return this.http.get<any>(`${environment.seatingAPI}/api/count`)
      .pipe(
        retry(5)
      );
  }

  public clearAttendees() {
    return this.http.get(`${environment.seatingAPI}/api/reset`)
      .pipe(
        retry(5)
      );
  }

  public loadDemo() {
    console.log('service: loadDemo');
    return this.http.get(`${environment.seatingAPI}/api/demo`)
      .pipe(
        retry(5)
      );
  }

  public addAttendee(attendee: Attendee) {
    return this.http.get<Attendee>(`${environment.seatingAPI}/api/attendee?name=` + attendee.name + '&business=' + attendee.business +
      '&industry=' + attendee.industry )
      .pipe();

  }

  // clearAttendees() {
  //   this.attendeeArray = [];
  //   return this.attendeeArray;
  // }
}
