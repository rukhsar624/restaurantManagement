import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UniversalService } from './../../../services/universal.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(private router: Router, private cd: ChangeDetectorRef, ) {}
  
  public orders: any = [
    {
      orderno: '12123123',
      item: [
        { no: '01', name: 'Beef Burger', description:"lorem ipsum blah beef burger steak" },
        { no: '02', name: 'Chicken Steak', description:"lorem ipsum blah beef burger steak" },
        { no: '03', name: 'Chicken Thai Chilli', description:"lorem ipsum blah beef burger steak" },
        { no: '01', name: 'Beef Burger', description:"lorem ipsum blah beef burger steak" },
        { no: '02', name: 'Chicken Steak', description:"lorem ipsum blah beef burger steak" },
        { no: '03', name: 'Chicken Thai Chilli', description:"lorem ipsum blah beef burger steak" },
      ],
      status: 'inprocess',
    },
    {
      orderno: '12123123',
      item: [
        { no: '01', name: 'Beef Burger', description:"lorem ipsum blah beef burger steak" },
        { no: '02', name: 'Chicken Steak', description:"lorem ipsum blah beef burger steak" },
        { no: '03', name: 'Chicken Thai Chilli', description:"lorem ipsum blah beef burger steak" },
        { no: '01', name: 'Beef Burger', description:"lorem ipsum blah beef burger steak" },
        { no: '02', name: 'Chicken Steak', description:"lorem ipsum blah beef burger steak" },
        { no: '03', name: 'Chicken Thai Chilli', description:"lorem ipsum blah beef burger steak" },
        { no: '01', name: 'Beef Burger', description:"lorem ipsum blah beef burger steak" },
        { no: '02', name: 'Chicken Steak', description:"lorem ipsum blah beef burger steak" },
        { no: '03', name: 'Chicken Thai Chilli', description:"lorem ipsum blah beef burger steak" },
      ],
      status: 'inprocess',
    },
    {
      orderno: '12123123',
      item: [
        { no: '01', name: 'Beef Burger', description:"lorem ipsum blah beef burger steak" },
        { no: '02', name: 'Chicken Steak', description:"lorem ipsum blah beef burger steak" },
        { no: '03', name: 'Chicken Thai Chilli', description:"lorem ipsum blah beef burger steak" },
      ],
      status: 'not-started',
    },
  ];
  ngOnInit(): void {
    this.observe('orders');
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
