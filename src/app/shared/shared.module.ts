import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ItemComponent } from './item/item.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MyorderComponent } from './myorder/myorder.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    ItemComponent,
    CartComponent,
    CartitemComponent,
    ItemDetailComponent,
    WelcomeComponent,
    MyorderComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule
  ],
  exports:[
    ItemComponent,
    CartComponent,
    ItemDetailComponent,
    MyorderComponent
  ]
})
export class SharedModule { }
