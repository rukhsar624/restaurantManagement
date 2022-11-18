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
  public waiter: boolean;
  public kitchen: boolean;
  public sidebarEnable: boolean = true;
  public serviceheading: any;
  public href: string;
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
  constructor(
    private location: Location,
    private cd: ChangeDetectorRef,
    public navServices: NavService,
    private helper: HelperService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.href = this.location.path();
    if (this.href == '/customers') {
      this.waiter = this.helper.urlCheck(this.href, 'customers');
    }
    if (this.href == '/welcome-customers') {
      this.waiter = this.helper.urlCheck(this.href, 'welcome-customers');
    }
    if (this.href == '/waiters') {
      this.waiter = this.helper.urlCheck(this.href, 'waiters');
    }
    if (this.href == '/welcome-waiters') {
      this.waiter = this.helper.urlCheck(this.href, 'welcome-waiters');
    }
    if (this.href.split('/')[1] == 'kitchen') {
      this.kitchen = this.helper.urlCheck(
        `/${this.href.split('/')[1]}`,
        'kitchen'
      );
      this.waiter = this.helper.urlCheck(
        `/${this.href.split('/')[1]}`,
        'kitchen'
      );
      localStorage.setItem('lastVisitheadingPage', 'Orders');
      UniversalService.headerHeading.next('Orders');
    }
    if (this.href == '/welcome-kitchen') {
      this.kitchen = this.helper.urlCheck(this.href, 'welcome-kitchen');
      this.waiter = this.helper.urlCheck(this.href, 'welcome-kitchen');
      localStorage.setItem('lastVisitheadingPage', 'Orders');
      UniversalService.headerHeading.next('Orders');
    }
    if (this.href == '') {
      this.waiter = true;
    }
    if (!this.waiter) {
      localStorage.setItem('orderView', 'false');
    }
    if (this.waiter) {
      localStorage.setItem('orderView', 'true');
    }
    if (this.kitchen) {
      localStorage.setItem('kitchenView', 'true');
    }
    this.observe();
    let vistHead = localStorage.getItem('lastVisitheadingPage');
    if (localStorage.getItem('lastVisitheadingPage') != null) {
      this.routerHead(null, vistHead);
    } else {
      this.routerHead(null, 'Starters');
    }
    if (
      localStorage.getItem('orderView') == 'false' ||
      localStorage.getItem('orderView') == null
    ) {
      this.sidebarEnable = false;
    } else {
      this.sidebarEnable = true;
    }
    if (
      localStorage.getItem('kitchenView') == 'true' ||
      localStorage.getItem('kitchenView') != null
    ) {
      this.menuItems = this.kitchenItem;
    } else {
      this.menuItems = this.menuItem;
    }
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
      if (!res) {
        this.sidebarEnable = false;
      } else {
        this.sidebarEnable = true;
      }
      this.cd.detectChanges();
    });
  }
}
