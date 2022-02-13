import { Component, OnInit } from '@angular/core';
import { MatDatepicker} from '@angular/material/datepicker';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MatButtonModule} from '@angular/material/button';
import {DBAttendee} from '../add-attendee/add-attendee.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-event',
  templateUrl: './start-event.component.html',
  styleUrls: ['./start-event.component.css']
})
export class StartEventComponent implements OnInit {
  selected: Date | null;
  groupId = '61fdcb02ebbea31a74f59200';
  groupData: Group | null;
  date: Date | null;

  constructor(private http: HttpClient, private router: Router) {
    console.log(`testing: ${this.groupId}`);
  }

  ngOnInit(): void {

    this.http.get<Group>(`${environment.seatingAPI}/group/${this.groupId}`).subscribe(data => {
      console.log(data);
      this.groupData = data;
      localStorage.setItem('group', JSON.stringify(data));
    });
  }

  handleClick() {
    const eventRequest: EventStartRequest = {
      groupId: this.groupId,
      group: this.groupData,
      date: this.date,
    };

    this.http.post<GroupEvent>(`${environment.seatingAPI}/event`, eventRequest).subscribe(response => {
      console.log(response);
      localStorage.setItem('event', response.id);
      localStorage.setItem('eventDate', response.date.toString());
      this.router.navigateByUrl('/attendee');
    });
  }


}

export interface GroupEvent {
    id: string;
    date: Date;
    groupId: string;
    group: Group;
    attendees: DBAttendee[];
}

export interface EventStartRequest {
  groupId: string;
  group: Group;
  date: Date;
}

export interface Group {
  id: string;
  displayName: string;
  shortName: string;
}
