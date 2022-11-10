import { UniversalService } from './../../services/universal.service';
import { NavService } from './../../services/nav.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

export interface Menu {
  img: string;
  item: string;
  description: string;
  price: number;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  public Menus: any = [
    {
      Starters: [
        {
          img: 'assets/menu items/starters.png',
          item: 'Beef Burger',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 50,
        },
        {
          img: 'assets/menu items/starters.png',
          item: 'Chicken Burger',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 80,
        },
        {
          img: 'assets/menu items/starters.png',
          item: 'Beef Cheese Burger',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 150,
        },
        {
          img: 'assets/menu items/starters.png',
          item: 'Steak Burger',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 250,
        },
        {
          img: 'assets/menu items/starters.png',
          item: 'Double Beef Patty Burger',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 550,
        },
      ],
    },
    {
      Desserts: [
        {
          img: 'assets/menu items/dessert.png',
          item: 'Red Valvet Cake',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 50,
        },
        {
          img: 'assets/menu items/dessert2.png',
          item: 'Ice Cream',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 80,
        },
        {
          img: 'assets/menu items/dessert.png',
          item: 'Brownie',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 150,
        },
        {
          img: 'assets/menu items/dessert2.png',
          item: 'Shakes',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 250,
        },
      ],
    },
    {
      Fast_Food: [
        {
          img: 'assets/menu items/burger.png',
          item: 'Red Valvet Cake',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 50,
        },
        {
          img: 'assets/menu items/burger.png',
          item: 'Ice Cream',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 80,
        },
        {
          img: 'assets/menu items/burger.png',
          item: 'Brownie',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 150,
        },
        {
          img: 'assets/menu items/burger.png',
          item: 'Shakes',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 250,
        },
      ],
    },
    {
      BBQ: [
        {
          img: 'assets/menu items/bbq.png',
          item: 'Red Valvet Cake',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 50,
        },
        {
          img: 'assets/menu items/bbq.png',
          item: 'Ice Cream',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 80,
        },
        {
          img: 'assets/menu items/bbq.png',
          item: 'Brownie',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 150,
        },
        {
          img: 'assets/menu items/bbq.png',
          item: 'Shakes',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 250,
        },
      ],
    },
    {
      Beverages: [
        {
          img: 'assets/menu items/beverages.png',
          item: 'Red Valvet Cake',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 50,
        },
        {
          img: 'assets/menu items/beverages.png',
          item: 'Ice Cream',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 80,
        },
        {
          img: 'assets/menu items/beverages.png',
          item: 'Brownie',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 150,
        },
        {
          img: 'assets/menu items/beverages.png',
          item: 'Shakes',
          description: 'Lorem Ipsum is simply dummy text of the printing',
          price: 250,
        },
      ],
    },
  ];
  public MenuSelected: any;
  constructor(private navService: NavService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    if(localStorage.getItem('heading') != null){
      this.Menus.map((e: any) => {
        const word:any = localStorage.getItem('heading')
        if (e.hasOwnProperty(word)) {
          this.MenuSelected = e[word];
        }
      });
    }
    
    this.observe();
  }
  async observe() {
    UniversalService.headerHeading.subscribe((res: string) => {
      this.Menus.map((e: any) => {
        const word = res.replace(/ /g, '_')
        if (e.hasOwnProperty(word)) {
          this.MenuSelected = e[word];
        }
      });
      this.cd.detectChanges();
    });
    UniversalService.cartShow.subscribe(res=>{
      if(res){
        this.Menus.map((e: any) => {
          const word = JSON.stringify(localStorage.getItem('heading')).replace(/ /g, '_')
          if (e.hasOwnProperty(word)) {
            this.MenuSelected = e[word];
          }
        });
      }
      this.cd.detectChanges();
    })
  }
}
