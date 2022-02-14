import {Component, OnDestroy, OnInit} from '@angular/core';
import {AttendeeService} from '../attendee.service';
import {Pair} from '../pair';
import {DataSharingService} from '../data-sharing.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {DBAttendee} from '../add-attendee/add-attendee.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.css']
})
export class PairingComponent implements OnInit, OnDestroy {
  navigationSubscription;
  count;
  // pairs = new Array<Pair>();
  pairs = new Array<NewPair>();
  attService;
  dataSharing;
  constructor(attService: AttendeeService, dataSharing: DataSharingService, public http: HttpClient, private router: Router) {
    this.attService = attService;
    this.dataSharing  = dataSharing;
    this.navigationSubscription = this.router.events.subscribe((e: any ) => {
      if (e instanceof NavigationEnd) {
        this.generateList();
      }
    });
  }

  ngOnInit(): void {
    // this.generateList();
    // const eventId = localStorage.getItem('event');
    // this.http.post<NewPair[]>(`${environment.seatingAPI}/event/${eventId}/pairing`, []).subscribe(resp => {
    //   const d = resp as NewPair[];
    //   for (const value of d) {
    //     // console.log(value);
    //     this.pairs.push(value);
    //   }
    //   console.log('pairs: ', this.pairs);
    // }, error => {
    // }, () => {
    //   this.http.get<ListCount>(`${environment.seatingAPI}/event/${eventId}/pairing/count`).subscribe(data => {
    //     this.count = data.listCount;
    //     console.log('number list: ', data.listCount);
    //   });
    // });
  }

  generateList() {
    const eventId = localStorage.getItem('event');
    this.http.post<NewPair[]>(`${environment.seatingAPI}/event/${eventId}/pairing`, []).subscribe(resp => {
      const d = resp as NewPair[];
      for (const value of d) {
        // console.log(value);
        this.pairs.push(value);
      }
      console.log('pairs: ', this.pairs);
    }, error => {
    }, () => {
      this.http.get<ListCount>(`${environment.seatingAPI}/event/${eventId}/pairing/count`).subscribe(data => {
        this.count = data.listCount;
        console.log('number list: ', data.listCount);
      });
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}

export interface NewPair {
  Seat1: DBAttendee;
  Seat2: DBAttendee;
}

export interface ListCount {
  listCount: number;
}
