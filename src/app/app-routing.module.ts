import { CustomersComponent } from './modules/customers/customers.component';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './shared/cart/cart.component';
import { InnerGuard } from './guards/inner.guard';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
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
  },
];

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
