import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { MatInput} from '@angular/material/input';
import { MatFormFieldControl, MatFormField} from '@angular/material/form-field';
import { MatSelect} from '@angular/material/select';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-event',
  templateUrl: './select-event.component.html',
  styleUrls: ['./select-event.component.css']
})
export class SelectEventComponent implements OnInit {

  selectedEvent: EventMeta;
  events: EventMeta[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<GroupsEvents>(`${environment.seatingAPI}/group/61fdcb02ebbea31a74f59200/event`).subscribe(data => {
      console.log(data);
      this.events = data.events;
    });
  }

  saveEvent() {
    console.log(this.selectedEvent);
    localStorage.setItem('event', this.selectedEvent.id);
    localStorage.setItem('eventDate', this.selectedEvent.date.toString());
    this.router.navigateByUrl('/attendee');
  }

}
export interface EventMeta {
  id: string;
  date: Date;
}

export interface GroupsEvents {
  events: EventMeta[];
}

interface Food {
  value: string;
  viewValue: string;
}
