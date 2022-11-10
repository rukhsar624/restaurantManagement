import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UniversalService } from './../../services/universal.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private modalService: NgbModal, private cd:ChangeDetectorRef) { }
  modalReference: any;
  ngOnInit(): void {
    if(localStorage.getItem('modal')){
      if(localStorage.getItem('modal') == 'checkout'){
        $("#checkoutBtn").trigger('click')
      }
      if(localStorage.getItem('modal') == 'thanks'){
        $("#proceedModal").trigger('click')
      }
      if(localStorage.getItem('modal') == 'viewOrder'){
        $("#viewOrder").trigger('click')
      }
      if(localStorage.getItem('modal') == 'completed'){
        $("#completed").trigger('click')
      }
    }
  }
  cartshow() {
      UniversalService.cartShow.next(false);
  }
  checkout(reason:string){
    UniversalService.checkoutModal.next(reason)
  }
	open(content:any, modal:string) {
    localStorage.setItem('modal',modal)
    if(modal == 'checkout'){
      this.modalReference = this.modalService.open(content, { centered: true, backdrop:'static', windowClass: 'checkoutModal'});
    }
    if(modal == 'thanks'){
      this.modalReference = this.modalService.open(content, { centered: true, backdrop:'static', windowClass: 'checkoutModal', size:'lg'});
    }
    if(modal == 'viewOrder'){
      this.modalReference = this.modalService.open(content, { centered: true, backdrop:'static', windowClass: 'checkoutModal', size:'xl'});
    }
    if(modal == 'completed'){
      this.modalReference = this.modalService.open(content, { centered: true, backdrop:'static', windowClass: 'checkoutModal',});
    }
	}
  async observe() {
  }
  modalClose(){
    localStorage.removeItem('modal')
  }
  proceed(){
    this.modalReference.close();
  }
  complete(){
    UniversalService.cartShow.next(false);
  }
}
