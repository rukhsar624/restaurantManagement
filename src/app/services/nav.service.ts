import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

// Menu
export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  children?: Menu[];
}
@Injectable({
  providedIn: 'root',
})
export class NavService{
  private unsubscriber: Subject<any> = new Subject();
  sidebarView:boolean;
  constructor(private router: Router) {}
  public menuItem = [
    {
      path: 'starters',
      title: 'Starters',
      icon: 'assets/sidebarIcons/starter.png',
      type: 'link',
    },
    {
      title: 'Main Course',
      type: 'sub',
      icon: 'assets/sidebarIcons/maincourse.png',
      active: false,
      children: [
        { path: 'fast-food', title: 'Fast Food', type: 'link' },
        { path: 'bbq', title: 'BBQ', type: 'link' },
      ],
    },
    {
      path: 'beverages',
      title: 'Beverages',
      icon: 'assets/sidebarIcons/beverages.png',
      type: 'link',
    },
    {
      path: 'desserts',
      title: 'Desserts',
      icon: 'assets/sidebarIcons/dessert.png',
      type: 'link',
    },
  ]
  public kitchenItem = [
    {
      path: 'orders',
      title: 'Orders',
      icon: 'assets/sidebarIcons/starter.png',
      type: 'link',
    },
    {
      path: 'menu',
      title: 'Menu',
      icon: 'assets/sidebarIcons/starter.png',
      type: 'link',
    },
  ]
  public MENUITEMS: any = null;
  ngOnDestroy() {
  }
  ngOnInit(): void {
    if(localStorage.getItem('kitchenView') == 'true' || localStorage.getItem('kitchenView') != null){
      this.sidebarView = true
      this.MENUITEMS = this.kitchenItem
      // alert('7uhe')
      // this.items.next(this.kitchenItem)
    }
    else{
      this.sidebarView = false
      this.MENUITEMS = this.menuItem
      // this.items.next(this.menuItem)
      // alert('ehllo')
    }
  }
  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
