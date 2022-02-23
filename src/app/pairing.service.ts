import { Injectable } from '@angular/core';
import {DBAttendee} from './add-attendee/add-attendee.component';

@Injectable({
  providedIn: 'root'
})
export class PairingService {

  private selectedAttendees = new Array<DBAttendee>();

  constructor() { }

  public setAttendees(attendees: DBAttendee[]) {
    this.selectedAttendees = attendees;
  }

  public getSelectedAttendees(): DBAttendee[] {
    return this.selectedAttendees;
  }
}
