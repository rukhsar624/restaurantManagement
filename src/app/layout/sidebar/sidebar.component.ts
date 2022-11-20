import { HelperService } from './../../services/helper.service';
import { Menu, NavService } from './../../services/nav.service';
import { NavigationEnd, Router } from '@angular/router';
import { UniversalService } from './../../services/universal.service';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import * as $ from 'jquery';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  public menuItems: any;
  public menuActive: boolean = false;
  public SubMenu: boolean = false;
  public activeImage = true;
  public waiter: any;
  public kitchen: boolean;
  public counter: boolean;
  public sidebarEnable: boolean = true;
  public serviceheading: any;
  public href: string;
  public role: any;
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
  ];
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
  ];
  public counterItem = [
    {
      path: 'orders',
      title: 'Orders',
      icon: 'assets/sidebarIcons/starter.png',
      type: 'link',
    },
    {
      title: 'Menu',
      type: 'sub',
      icon: 'assets/sidebarIcons/maincourse.png',
      active: false,
      children: [
        { path: 'fast-food', title: 'Fast Food', type: 'link' },
        { path: 'bbq', title: 'BBQ', type: 'link' },
      ],
    },
    {
      path: 'staff',
      title: 'Staff',
      icon: 'assets/sidebarIcons/starter.png',
      type: 'link',
    },
    {
      path: 'sale&expense',
      title: 'Sale & Expense',
      icon: 'assets/sidebarIcons/starter.png',
      type: 'link',
    },
    {
      path: 'reportings',
      title: 'Reportings',
      icon: 'assets/sidebarIcons/starter.png',
      type: 'link',
    },
    {
      path: 'bookings',
      title: 'Bookings',
      icon: 'assets/sidebarIcons/starter.png',
      type: 'link',
    },
    {
      path: 'support',
      title: 'Support',
      icon: 'assets/sidebarIcons/starter.png',
      type: 'link',
    },
  ];
  constructor(
    private location: Location,
    private cd: ChangeDetectorRef,
    public navServices: NavService,
    private helper: HelperService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.href = this.location.path();
    if (this.href == '/welcome-counter' || this.href.split('/')[1] == 'counter') {
      UniversalService.headerHeading.next('');
      this.role = this.helper.urlCheck(this.href, 'welcome-counter', 'counter');
    }
    if (this.href == '/welcome-customers' || this.href == '/customers') {
      UniversalService.headerHeading.next('Starters');
      this.role = this.helper.urlCheck(this.href, 'welcome-customers', 'customers');
    }
    if (this.href == '/welcome-waiters' || this.href == '/waiters') {
      UniversalService.headerHeading.next('Starters');
      this.role = this.helper.urlCheck(this.href, 'welcome-waiters', 'waiters');
    }
    if (this.href == 'welcome-kitchen' || this.href.split('/')[1] == 'kitchen') {
      if(!localStorage.hasOwnProperty('lastVisitheadingPage')){
        localStorage.setItem('lastVisitheadingPage', 'Orders');
      }
      UniversalService.headerHeading.next('Orders');
      this.role = this.helper.urlCheck(this.href, 'welcome-kitchen', 'kitchen');
    }
    console.log(this.role);
    
    if(this.role == 'customers') this.menuItems = this.menuItem;
    if(this.role == 'waiters') {
      this.menuItems = this.menuItem;
      if(!localStorage.hasOwnProperty('orderView')){
        localStorage.setItem('orderView', 'true')
      }
    };
    if(this.role == 'kitchen') this.menuItems = this.kitchenItem;
    if(this.role == 'counter') this.menuItems = this.counterItem;
    this.observe();
    let vistHead = localStorage.getItem('lastVisitheadingPage');
    if (localStorage.getItem('lastVisitheadingPage') != null) {
      this.routerHead(null, vistHead);
    } else {
      this.routerHead(null, 'Starters');
    }
    if(localStorage.hasOwnProperty('orderView')){
      if (
        localStorage.getItem('orderView') == 'true' ||
        localStorage.getItem('orderView') == null
      ) {
        this.sidebarEnable = false;
      } else {
        this.sidebarEnable = true;
      }
    }
    else this.sidebarEnable = true
    this.menuItems?.map((e: any) => {
      if (e.title == localStorage.getItem('lastVisitheadingPage')) {
        e['active'] = true;
      } else {
        e['active'] = false;
      }
    });
  }
  // Click Toggle menu
  toggletNavActive(item: any) {
    if (!item.active) {
      this.menuItems.forEach((a: any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }
  routerHead(event: any, heading: any) {
    UniversalService.headerHeading.next(heading);
    let path = heading.replace(/[\s,]/g, '')
    this.menuItems?.map((e:any)=>{
      if(e?.type == 'sub'){
        e?.children?.map((v:any)=>{
          if(v.title == heading) UniversalService.routePath.next('menu');
        })
      }
      if(e?.type != 'sub' && e.title == heading){
        UniversalService.routePath.next(path);
      }
    })
    localStorage.setItem('lastVisitheadingPage', heading);
    UniversalService.itemDetailView.next(false);
    localStorage.setItem('heading', heading);
    if (
      $(event?.target?.parentNode?.parentNode?.parentNode).hasClass(
        'activeSide'
      ) &&
      heading == this.serviceheading
    ) {
      $('li').removeClass('activeSideMenulink');
      $(event?.target?.parentNode?.parentNode?.parentNode).addClass(
        'activeSideMenulink'
      );
    }
    if (event != null) {
      UniversalService.cartShow.next(false);
    }
  }
  async observe() {
    UniversalService.headerHeading.subscribe((res: string) => {
      this.menuItems?.map((e: any) => {
        if (e.title == res) {
          e['active'] = true;
        } else {
          e['active'] = false;
        }
      });
      this.serviceheading = res;
      this.cd.detectChanges();
      // this.toggletNavActive(res)
    });
    UniversalService.SideBar.subscribe((res: boolean) => {
      if (res) {
        this.sidebarEnable = true;
      } else {
        this.sidebarEnable = false;
      }
      this.cd.detectChanges();
    });
  }
}
