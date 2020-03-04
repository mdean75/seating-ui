import { Component, OnInit } from '@angular/core';
import {AttendeeService} from '../attendee.service';
import {Pair} from '../pair';
import {DataSharingService} from '../data-sharing.service';

@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.css']
})
export class PairingComponent implements OnInit {
  count;
  pairs = new Array<Pair>();
  attService;
  dataSharing;
  constructor(attService: AttendeeService, dataSharing: DataSharingService) {
    this.attService = attService;
    this.dataSharing  = dataSharing;
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
    console.log(this.count);
    this.dataSharing.updateCountFn(this.count);
  }

}
