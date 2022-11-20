import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { OrdersComponent } from './orders/orders.component';
import { StaffComponent } from './staff/staff.component';
import { SaleComponent } from './sale/sale.component';
import { ReportingsComponent } from './reportings/reportings.component';
import { BookingsComponent } from './bookings/bookings.component';
import { SupportComponent } from './support/support.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CounterComponent,
    OrdersComponent,
    StaffComponent,
    SaleComponent,
    ReportingsComponent,
    BookingsComponent,
    SupportComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class CounterModule { }
