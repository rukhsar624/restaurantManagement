import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UniversalService } from './../../services/universal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss'],
})
export class MyorderComponent implements OnInit {
  public tables: any = [
    { no: '01', status: 'Complete' },
    { no: '02', status: 'Ending' },
    { no: '03', status: 'Ending' },
    { no: '04', status: 'In process' },
    { no: '05', status: 'Complete' },
    { no: '06', status: 'Ending' },
    { no: '07', status: 'In process' },
  ];
  modalReference: any;
  selectedTable: any;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
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
    console.log(this.selectedTable);
    
  }
  proceed() {
    this.modalReference.close();
  }
}
