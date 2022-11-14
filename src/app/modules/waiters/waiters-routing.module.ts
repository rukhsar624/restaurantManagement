import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitersComponent } from './waiters.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WaitersComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitersRoutingModule { }
