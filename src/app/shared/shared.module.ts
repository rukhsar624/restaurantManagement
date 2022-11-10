import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    ItemComponent
  ]
})
export class SharedModule { }
