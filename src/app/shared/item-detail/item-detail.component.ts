import { UniversalService } from './../../services/universal.service';
import { fadeIn } from './../../../animations/itemCartAnimation';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  animations:[fadeIn]
})
export class ItemDetailComponent implements OnInit {
  @Input() data: any;
  public firstName:string;
  public lastName:string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    this.firstName = this.data?.item?.split(' ')[0]
    this.lastName = this.data?.item?.split(' ')[1]
  }
  ngOnInit(): void {
  }
  back(){
    UniversalService.itemDetailView.next(false)
  }
}
