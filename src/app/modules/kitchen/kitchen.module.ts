import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenRoutingModule } from './kitchen-routing.module';
import { KitchenComponent } from './kitchen.component';
import { OrdersComponent } from './orders/orders.component';
import { MenuComponent } from './menu/menu.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    KitchenComponent,
    OrdersComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    KitchenRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class KitchenModule { }
