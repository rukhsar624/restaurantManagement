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
  public serviceheading: any;
  constructor(private cd: ChangeDetectorRef, public navServices: NavService) {
    this.navServices.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
  }
  ngOnInit(): void {
    this.observe();
    this.routerHead(null, 'Starters');
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
  }
}
