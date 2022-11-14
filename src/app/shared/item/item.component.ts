import { UniversalService } from './../../services/universal.service';
import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.MenuItems = this.data;
    this.data.map((e: Menu) => {
      this.ItemNames.push({
        firstName: e.item.split(' ')[0],
        lastName: e.item.split(' ')[1],
      });
    });
  }

  ngOnInit(): void {
  }
  viewDetail(item:any){
    UniversalService.itemDetailView.next(true)
    UniversalService.itemDetail.next(item)
    // UniversalService.headerHeading.next(item.item);
  }
}
