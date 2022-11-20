import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CounterComponent } from './counter.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ReportingsComponent } from './reportings/reportings.component';
import { SaleComponent } from './sale/sale.component';
import { StaffComponent } from './staff/staff.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'sale&expense', component: SaleComponent },
  { path: 'reportings', component: ReportingsComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'support', component: SupportComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
