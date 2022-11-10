import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { fadeIn } from 'src/animations/itemCardAnimation';

export interface Menu {
  img: string;
  item: string;
  description: string;
  price: number;
}
export interface Name {
  firstName: string;
  lastName: string;
}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [fadeIn],
})
export class ItemComponent implements OnInit {
  @Input() data: any;
  public MenuItems: Menu[] = [];
  public ItemNames: Name[] = [];
  public MenuItemsAnimate: Menu[] = [];
  public ItemNamesAnimate: Name[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.data);
    
    this.MenuItems = this.data;
    this.data.map((e: Menu) => {
      this.ItemNames.push({
        firstName: e.item.split(' ')[0],
        lastName: e.item.split(' ')[1],
      });
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
