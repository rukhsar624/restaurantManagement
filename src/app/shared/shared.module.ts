import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ItemComponent } from './item/item.component';
import { CartitemComponent } from './cartitem/cartitem.component';


@NgModule({
  declarations: [
    ItemComponent,
    CartComponent,
    CartitemComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    ItemComponent,
    CartComponent
  ]
})
export class SharedModule { }
