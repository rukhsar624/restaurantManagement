import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  public static headerHeading: Subject<any> = new Subject<any>();
  constructor() { }
}
