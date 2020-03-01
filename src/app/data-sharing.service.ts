import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  // this will need to be worked on
  public listCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }
}
