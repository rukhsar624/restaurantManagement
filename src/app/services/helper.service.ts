import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  urlCheck(r: string, firstValue: string, secondValue: string) {
    let url = r.split('/')[1];
    if (url == firstValue || url == secondValue) {
      return secondValue;
    }
    else {
      return false;
    }
  }
  titleCheck(title: string, value: string) {
    if (title == value) {
      return true;
    } else {
      return false;
    }
  }
  urlSplit(r: string) {
    return r.split('/')[1];
  }
  constructor() {}
}
