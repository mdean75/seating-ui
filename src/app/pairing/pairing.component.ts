import { Component, OnInit } from '@angular/core';
import {AttendeeService} from '../attendee.service';
import {Pair} from '../pair';

@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.css']
})
export class PairingComponent implements OnInit {
  count;
  pairs = new Array<Pair>();
  attService;
  constructor(attService: AttendeeService) {
    this.attService = attService;
  }

  ngOnInit(): void {
    this.attService.getPairingList().subscribe(data => {
      this.pairs = data.map(item => {
        return new Pair(
          item.seat1, item.seat2
        );
      });
      console.log(this.pairs);
    });

    this.attService.getListcount().subscribe(data => {
      this.count = data.valueOf('ListCount');
    });
  }

}
