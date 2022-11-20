import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UniversalService } from './../../services/universal.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss'],
})
export class MyorderComponent implements OnInit {
  @Input() tables: any;
  @Input() opt: any;
  modalReference: any;
  selectedTable: any;
  duePage: any;
  total: any;
  constructor(private modalService: NgbModal) {}
  views = [
    { id: 1, name: 'Grid View' },
    { id: 2, name: 'List View' },
  ];
  selectedView: any = this.views[0].name;
  sorts = [
    { id: 1, name: 'Sort By Name' },
    { id: 2, name: 'Sort By Date' },
  ];
  selectedSort: any = this.sorts[0].name;
  ngOnInit(): void {
    console.log(this.selectedView);
    
    UniversalService.SideBar.next(false);
    if (localStorage.getItem('orderView') == 'false') {
      return;
    } else {
      localStorage.setItem('orderView', 'true');
    }
  }
  addTable() {
    UniversalService.TableModal.next(true);
  }
  back() {
    UniversalService.cartShow.next(false);
    UniversalService.Orders.next(false);
  }
  open(content: any, modal: any) {
    this.selectedTable = modal
    this.modalReference = this.modalService.open(content, {
      centered: true,
      backdrop: 'static',
      windowClass: 'checkoutModal',
      size:'xl'
    });
  }
  proceed() {
    this.modalReference.close();
  }
}
