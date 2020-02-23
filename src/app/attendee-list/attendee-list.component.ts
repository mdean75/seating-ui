import { Component, OnInit } from '@angular/core';
import {Attendee} from '../Attendee';
import {Attendees} from '../demo-list';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {
  // attendee: Attendee = {
  //   name: 'Joe Smith',
  //   id: this.getRandomInteger(),
  //   business: 'ABC Cleaning',
  //   industry: 'Cleaning',
  //   pairedWith: ['Jane Doe', 'Jerry Seinfeld', 'Mike Elam']
  // };
  attendees = Attendees;


  constructor() { }

  ngOnInit(): void {
  }

}

function getRandomInt() {
  let min = 1;
  let max = 1000;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
