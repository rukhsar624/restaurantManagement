import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UniversalService } from 'src/app/services/universal.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  active = 1;
  public MenuSelected: any;
  public itemDetailView: boolean = false;
  public itemDetail:any;
  public theBoundCallback: Function;
  public MyOrderView:boolean = true;
  public modalView:boolean = false;
  public Waitertables: any = [
    { no: '01', name:'Jennifer', amount:12, items:2, tables:'T1' , status: 'Complete', waiter:'Lawrence', payment:'Cash', action:{process:'process',edit:'edit',cancel:'cancel'}},
    { no: '02', name:'Jennifer', amount:53, items:2, tables:'T2' , status: 'Ending', waiter:'Lawrence', payment:'Card', action:{process:'process',edit:'edit',cancel:'cancel'}},
    { no: '03', name:'Jennifer', amount:60, items:2, tables:'T3' , status: 'Ending', waiter:'Lawrence', payment:'Cash', action:{process:'process',edit:'edit',cancel:'cancel'}},
    { no: '04', name:'Jennifer', amount:100, items:2, tables:'T4' , status: 'In process', waiter:'Lawrence', payment:'Card', action:{process:'process',edit:'edit',cancel:'cancel'}},
    { no: '05', name:'Jennifer', amount:200, items:2, tables:'T5' , status: 'Complete', waiter:'Lawrence', payment:'Cash', action:{process:'process',edit:'edit',cancel:'cancel'}},
    { no: '06', name:'Jennifer', amount:14, items:2, tables:'T6' , status: 'In process', waiter:'Lawrence', payment:'Card', action:{process:'process',edit:'edit',cancel:'cancel'}},
    { no: '07', name:'Jennifer', amount:34, items:2, tables:'T7' , status: 'Complete', waiter:'Lawrence', payment:'Cash', action:{process:'process',edit:'edit',cancel:'cancel'}},
  ];
  constructor(private modalService: NgbModal, private cd:ChangeDetectorRef,private router:Router ) {}
  async observePath(path: string) {
    if (path) {
      this.router.navigate([`counter/${path}`]);
    }
    UniversalService.headerHeading.subscribe((res: string) => {
      let path = res.toLowerCase();
      this.router.navigate([`counter/${path}`]);
      this.cd.detectChanges();
    });
  }

  modalReference: any;
  ngOnInit(): void {
    this.observePath('orders');
    // if (localStorage.getItem('heading') != null) {
    //   this.Menus.map((e: any) => {
    //     const word: any = localStorage.getItem('heading');
    //     if (e.hasOwnProperty(word)) {
    //       this.MenuSelected = e[word];
    //     }
    //   });
    // }
    if(localStorage.getItem('orderView') == 'false'){
      this.MyOrderView = false
      // debugger
    }
    else{
      this.MyOrderView = true
    }
    
    UniversalService.modules.next(true)
    this.observe();
  }
  open(content:any, modal:string) {
      this.modalReference = this.modalService.open(content, { centered: true, backdrop:'static', windowClass: 'checkoutModal'});
	}
  proceed(){
    this.modalReference.close();
  }
  async observe() {
    UniversalService.routePath.subscribe((res: string) => {
      let path = res.toLowerCase();
      this.router.navigate([`counter/${path}`]);
      this.cd.detectChanges();
    });
    UniversalService.cartShow.subscribe((res) => {
      if (res) {
        // this.Menus.map((e: any) => {
        //   const word = JSON.stringify(localStorage.getItem('heading')).replace(
        //     / /g,
        //     '_'
        //   );
        //   if (e.hasOwnProperty(word)) {
        //     this.MenuSelected = e[word];
        //   }
        // });
      }
      this.cd.detectChanges();
    });
    UniversalService.itemDetailView.subscribe((res) => {
      if (res) {
        this.itemDetailView = true;
      } else {
        this.itemDetailView = false;
      }
      this.cd.detectChanges();
    });
    UniversalService.itemDetail.subscribe(res=>{
      if(res){
        this.itemDetail = res
      }
      else{
        this.itemDetail = res
      }
      this.cd.detectChanges();
    })
    UniversalService.Orders.subscribe(res=>{
      if(res){
        this.MyOrderView = res
      }
      else{
        this.MyOrderView = res
      }
      this.cd.detectChanges();
    })
    UniversalService.TableModal.subscribe(res=>{
      if(res){
        this.modalView = true
        setTimeout(() => {
          $("#qrCode").trigger('click')
        }, 500);
      }
      else{
        this.proceed()
        this.modalView = false
      }
      this.cd.detectChanges();
    })
  }
  scan(){
    this.proceed()
    localStorage.setItem('orderView', 'false')
    UniversalService.SideBar.next(true)
    UniversalService.Orders.next(false)
    UniversalService.TableModal.next(false)
  }
}
