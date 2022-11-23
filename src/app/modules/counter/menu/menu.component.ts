import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';
import { UniversalService } from 'src/app/services/universal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public Menus: any = [
    {
      Fast_Food: [
        {
          img: 'assets/menu items/burger.png',
          itemName: 'Burger',
          description: 'A burger is a flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll. ...',
          price: 50,
          category: 'Fast Food',
        },
        {
          img: 'assets/menu items/pizza.png',
          itemName: 'Pizza',
          description: 'A delicious pizza has an intensely cheesy flavor. The combination of tomato sauce and cheese creates a perfect marriage of flavor. The ingredients begin to brown during the baking process, which makes pizza taste so delicious.',
          price: 80,
          category: 'Fast Food',
        },
        {
          img: 'assets/menu items/clubsandwich.png',
          itemName: 'Club Sandwich',
          description: 'A club sandwich, also called a clubhouse sandwich, is a sandwich consisting of bread (traditionally toasted), sliced cooked poultry, ham, fried bacon, lettuce, tomato, and mayonnaise. It is often cut into quarters or halves and held together by cocktail sticks.',
          price: 150,
          category: 'Fast Food',
        },
        {
          img: 'assets/menu items/lasagne.png',
          itemName: 'Lasagne',
          description: 'Lasagna is a wide, flat sheet of pasta. Lasagna can refer to either the type of noodle or to the typical lasagna dish which is a dish made with several layers of lasagna sheets with sauce and other ingredients, such as meats and cheese, in between the lasagna noodles.',
          price: 250,
          category: 'Fast Food',
        },
      ],
    },
    {
      BBQ: [
        {
          img: 'assets/menu items/BBQChickenWings..png',
          itemName: 'Bbq Chicken Wings',
          description: 'Boneless wings are essentially small pieces of skinless, boneless chicken breast that are coated in flour and spices, then fried or baked.',
          price: 50,
          category: 'BBQ',
        },
        {
          img: 'assets/menu items/bbq.png',
          itemName: 'Chicken Tikka',
          description: 'It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken.',
          price: 80,
          category: 'BBQ',
        },
        {
          img: 'assets/menu items/kebab.png',
          itemName: 'Beef Kebab',
          description: 'A kebab is pieces of meat or vegetables grilled on a long thin stick, or slices of grilled meat served in flat bread.',
          price: 150,
          category: 'BBQ',
        },
      ],
    }
  ];
  public MenuSelected: any;
  public itemDetailView: boolean = false;
  public itemDetail: any;
  public theBoundCallback: Function;
  constructor(private cd: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    this.Menus.map((e: any) => {
      console.log(e);
      const word: any = 'Fast_Food';
      if (e.hasOwnProperty(word)) {
        this.MenuSelected = e[word];
      }
    });
    this.observe();
    this.observePath();
  }
  async observe() {
    UniversalService.headerHeading.subscribe((res: string) => {
      this.Menus.map((e: any) => {
        const word = res.replace(/ /g, '_');
        if (e.hasOwnProperty(word)) {
          this.MenuSelected = e[word];
        }
      });
      this.cd.detectChanges();
    }),(err:any)=>console.log(err);;
    UniversalService.cartShow.subscribe((res) => {
      if (res) {
        this.Menus.map((e: any) => {
          const word = JSON.stringify(localStorage.getItem('heading')).replace(
            / /g,
            '_'
          );
          if (e.hasOwnProperty(word)) {
            this.MenuSelected = e[word];
          }
        });
      }
      this.cd.detectChanges();
    }),(err:any)=>console.log(err);;
    UniversalService.itemDetailView.subscribe((res) => {
      if (res) {
        this.itemDetailView = true;
      } else {
        this.itemDetailView = false;
      }
      this.cd.detectChanges();
    }),(err:any)=>console.log(err);;
    UniversalService.itemDetail.subscribe(res => {
      if (res) {
        this.itemDetail = res
      }
      else {
        this.itemDetail = res
      }
      this.cd.detectChanges();
    }),(err:any)=>console.log(err);
  }
  async observePath() {
    // if (path) {
    //   this.router.navigate([`counter/${path}`]);
    // }
    UniversalService.routePath.subscribe((res: string) => {
      let path = res.toLowerCase();
      this.router.navigate([`counter/${path}`]);
      this.cd.detectChanges();
    }),(err:any)=>console.log(err);;
  }

}
