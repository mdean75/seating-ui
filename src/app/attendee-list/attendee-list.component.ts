import { Component, OnInit } from '@angular/core';
import {AttendeeI} from '../Attendee-i';
// import {Attendees} from '../demo-list';
import {HttpClient} from '@angular/common/http';
import {Attendee} from '../attendee';
import {AttendeeService} from '../attendee.service';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {
  constructor(attservice: AttendeeService) {
    this.attService = attservice;
    // attservice.getAttendees().subscribe(data => {
    //   this.attendees1 = data.map(item => {
    //     return new Attendee(
    //       item.id, item.name, item.business, item.industry, item.pairedWith
    //     );
    //   });
    //   const d = data as Attendee[];
    //   for (const value of d) {
    //     console.log(value);   //10 20 30
    //     // const v = new Attendee(value.id, value.name, value.business, value.industry);
    //     this.attendees.push(value);
    //   }
    //   // console.log(d);
    //   // this.attendees = d;
    // });
    // console.log(this.attendees);
  }
  attService;
  // attendees = Attendees;
  public attendees = new Array<Attendee>();
  attendees1 = new Array<Attendee>();
  // atti: AttendeeI[];
  abc;
  totalAngularPackages: Attendee[];
  attendeeService: AttendeeService;
  ngOnInit(): void {
    // this.http.get<any[]>('https://seating.bedaring.me/api/appdata').subscribe(data => {
    //   this.abc = data;
    // });
    // this.http.get<any>('https://seating.bedaring.me/api/appdata').subscribe(data => {
    //   this.totalAngularPackages = data.Attendees;
    // });

    // this.attendeeService.getAttendees().subscribe(data => {
    //   this.totalAngularPackages = data;
    // });
    // this.http.get<AttendeeI[]>('http://localhost:3000/api/attendees').subscribe(data => {
    //   this.attendees = data;
    // });
    // console.log(this.attendees);
    this.attService.getAttendees().subscribe(data => {
      this.attendees1 = data.map(item => {
        return new Attendee(
          item.id, item.name, item.business, item.industry, item.pairedWith, item.pairedWithame
        );
      });
      const d = data as Attendee[];
      for (const value of d) {
        console.log(value);
        // const v = new Attendee(value.id, value.name, value.business, value.industry);
        this.attendees.push(value);
      }
      console.log(this.attendees);
      // console.log(d);
      // this.attendees = d;
    });
  }

}
