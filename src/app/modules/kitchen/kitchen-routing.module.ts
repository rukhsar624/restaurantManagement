import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenComponent } from './kitchen.component';

const routes: Routes = [
  { path: '', component: KitchenComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitchenRoutingModule {}
