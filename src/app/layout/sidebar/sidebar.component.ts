import { Menu,NavService } from './../../services/nav.service';
import { NavigationEnd, Router } from '@angular/router';
import { UniversalService } from './../../services/universal.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  public menuItems:any;
  public SubMenu: boolean = false;
  public activeImage = true;
  constructor(private router: Router, public navServices: NavService) {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      // this.router.events.subscribe((event) => {
      //   console.log(menuItems, event);
      //   // if (event instanceof NavigationEnd) {
      //   //   menuItems.filter(items => {
      //   //     if (items.path === event.url) {
      //   //       this.setNavActive(items);
      //   //     }
      //   //     if (!items.children) { return false; }
      //   //     items.children.filter(subItems => {
      //   //       if (subItems.path === event.url) {
      //   //         this.setNavActive(subItems);
      //   //       }
      //   //       if (!subItems.children) { return false; }
      //   //       subItems.children.filter(subSubItems => {
      //   //         if (subSubItems.path === event.url) {
      //   //           this.setNavActive(subSubItems);
      //   //         }
      //   //       });
      //   //     });
      //   //   });
      //   // }
      // });
    });
  }
  ngOnInit(): void {
    this.routerHead('Starters')
  }
    // Active Nave state
    // setNavActive(item:any) {
    //   this.menuItems.filter((menuItem:any) => {
    //     if (menuItem !== item) {
    //       menuItem.active = false;
    //     }
    //     if (menuItem.children && menuItem.children.includes(item)) {
    //       menuItem.active = true;
    //     }
    //     if (menuItem.children) {
    //       menuItem.children.filter((submenuItems:any) => {
    //         console.log(submenuItems,'ghello');
    //         if (submenuItems.children && submenuItems.children.includes(item)) {
    //           menuItem.active = true;
    //           submenuItems.active = true;
              
    //         }
    //       });
    //     }
    //   });
    // }
     // Click Toggle menu
  toggletNavActive(item:any) {
    console.log(item,"helloitem");
    
    if (!item.active) {
      this.menuItems.forEach((a:any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) { return false; }
        a.children.forEach((b:any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }
  routerHead(heading:string){
    UniversalService.headerHeading.next(heading)    
  }
}
