import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {
  public static headerHeading: Subject<any> = new Subject<any>();
  public static cartShow: Subject<any> = new Subject<any>();
  public static checkoutModal: Subject<any> = new Subject<any>();
  public static itemDetail: Subject<any> = new Subject<any>();
  public static itemDetailView: Subject<any> = new Subject<any>();
  constructor() { }
}
