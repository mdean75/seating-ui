import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public listCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }
}
