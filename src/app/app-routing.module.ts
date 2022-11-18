// import { CustomerRoleGuard } from './guards/role.guard';
import { CustomersComponent } from './modules/customers/customers.component';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './shared/cart/cart.component';
import { InnerGuard } from './guards/inner.guard';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RoleGuard } from './guards/inner.guard';
// import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome-customers',
    pathMatch: 'full',
  },
  {
    path: 'welcome-customers',
    component: WelcomeComponent,
    canActivate: [InnerGuard],
    data: { animation: 'welcomePage' },
  },
  {
    path: 'welcome-waiters',
    component: WelcomeComponent,
    canActivate: [InnerGuard],
    data: { animation: 'welcomePage' },
  },
  {
    path: 'welcome-kitchen',
    component: WelcomeComponent,
    canActivate: [InnerGuard],
    data: { animation: 'welcomePage' },
  },
  {
    path: 'add-cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./modules/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
    canActivate: [AuthGuard],
    data: { title: 'customers', roles: 'customers' },
  },
  {
    path: 'waiters',
    loadChildren: () =>
      import('./modules/waiters/waiters.module').then((m) => m.WaitersModule),
      canActivate: [AuthGuard],
    data: { title: 'waiters' , roles: 'waiters'},

  },
  { path: 'kitchen', loadChildren: () => import('./modules/kitchen/kitchen.module').then(m => m.KitchenModule) },
];

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
