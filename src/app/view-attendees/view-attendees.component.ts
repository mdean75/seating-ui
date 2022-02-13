import { Component, OnInit } from '@angular/core';
import {Attendee} from '../attendee';
import {AttendeeService} from '../attendee.service';
import {HttpClient} from '@angular/common/http';
import {GroupEvent} from '../start-event/start-event.component';
import {environment} from '../../environments/environment';
import {DBAttendee} from '../add-attendee/add-attendee.component';


@Component({
  selector: 'app-view-attendees',
  templateUrl: './view-attendees.component.html',
  styleUrls: ['./view-attendees.component.css']
})
export class ViewAttendeesComponent implements OnInit {

  constructor(public attservice: AttendeeService, public http: HttpClient) {
    // this.attService = attservice;
  }
  // attService;
  // attendees = Attendees;
  public attendees = new Array<Attendee>();
  dbattendees = new Array<DBAttendee>();
  attendees1 = new Array<Attendee>();
  // atti: AttendeeI[];
  abc;
  totalAngularPackages: Attendee[];
  attendeeService: AttendeeService;
  ngOnInit(): void {

    const eventId = localStorage.getItem('event');
    this.http.get<GroupEvent>(`${environment.seatingAPI}/event/${eventId}`).subscribe(data => {
      console.log(data);
      const d = data.attendees as DBAttendee[];

      for (const value of d) {
        const pairedWith = new Array<string>();
        // console.log(value);
        if (value.pairedWith != null) {
          for (const vv of value.pairedWith) {
            pairedWith.push(vv.name);
          }
        }

        value.pairedWithNames = pairedWith;
        this.dbattendees.push(value);
      }
    });
    // this.attservice.getAttendees().subscribe(data => {
    //   // this.attendees1 = data.map(item => {
    //   //   return new Attendee(
    //   //     item.id, item.name, item.business, item.industry, item.pairedWith, item.pairedWithame
    //   //   );
    //   // });
    //   const d = data as Attendee[];
    //   for (const value of d) {
    //     console.log(value);
    //     // const v = new Attendee(value.id, value.name, value.business, value.industry);
    //     this.attendees.push(value);
    //   }
    //   console.log(this.attendees);
    // });
  }

  generatePairing() {
    const eventId = localStorage.getItem('event');
    this.http.post(`${environment.seatingAPI}/event/${eventId}/pairing`, []).subscribe(resp => {
      console.log(resp);
    });
  }
}
