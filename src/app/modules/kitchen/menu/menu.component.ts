import { Router } from '@angular/router';
import { UniversalService } from './../../../services/universal.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router, private cd: ChangeDetectorRef) {}
  menuData: any = [
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: false,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: true,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: false,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: true,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: false,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: true,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: false,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: true,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: false,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: true,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: true,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: true,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: false,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: true,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: true,
    },
    {
      code: '01',
      item: 'Club Sandwich',
      category: 'Fast Food',
      availablity: false,
    },
  ];
  duePage:any
  total:any
  ngOnInit(): void {
    this.observe('menu');
  }
  async observe(path: string) {
    if (path) {
      this.router.navigate([`kitchen/${path}`]);
    }
    UniversalService.headerHeading.subscribe((res: string) => {
      let path = res.toLowerCase();
      this.router.navigate([`kitchen/${path}`]);
      this.cd.detectChanges();
    });
  }
}
