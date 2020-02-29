import {Attendee} from './attendee';

export class Pair {
  public seat1: Attendee;
  public seat2: Attendee;

  constructor(
    seat1: Attendee,
    seat2: Attendee
  ) {
    this.seat1 = seat1;
    this.seat2 = seat2;
  }
}
