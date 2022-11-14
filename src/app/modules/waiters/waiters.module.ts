import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitersRoutingModule } from './waiters-routing.module';
import { WaitersComponent } from './waiters.component';


@NgModule({
  declarations: [
    WaitersComponent
  ],
  imports: [
    CommonModule,
    WaitersRoutingModule,
    SharedModule
  ]
})
export class WaitersModule { }
