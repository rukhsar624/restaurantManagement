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
  public SubMenu: boolean = false;
  public activeImage = true;
  public waiter:boolean 
  public sidebarEnable:boolean = true 
  public serviceheading: any;
  public href:string
  constructor(private location: Location, private cd: ChangeDetectorRef, public navServices: NavService, private helper:HelperService, private router:Router) {
    this.navServices.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
  }
  ngOnInit(): void {
    this.href = this.location.path()
    if(this.href == '/customers'){
      this.waiter = this.helper.urlCheck(this.href, 'customers')
    }
    if(this.href == '/welcome-customers'){
      this.waiter = this.helper.urlCheck(this.href, 'welcome-customers')
    }
    if(this.waiter == false){
      localStorage.setItem('orderView', 'false')
    }
    this.observe();
    this.routerHead(null, 'Starters');
    if(localStorage.getItem('orderView') == 'false' || localStorage.getItem('orderView') == null){
      this.sidebarEnable = true
    }
    else{
      this.sidebarEnable = false
    }
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
  routerHead(event: any, heading: string) {
    UniversalService.headerHeading.next(heading);
    UniversalService.itemDetailView.next(false)
    localStorage.setItem('heading',heading)
    if (
      $(event?.target?.parentNode?.parentNode?.parentNode).hasClass('activeSide') &&
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
      this.serviceheading = res;
      this.cd.detectChanges();
    });
    UniversalService.SideBar.subscribe((res: boolean) => {
      if(!res){
        this.sidebarEnable = false
      }
      else{
        this.sidebarEnable = true
      }
      this.cd.detectChanges();
    });
  }
}
