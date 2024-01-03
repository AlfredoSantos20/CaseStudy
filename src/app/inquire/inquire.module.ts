import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InquirePageRoutingModule } from './inquire-routing.module';

import { InquirePage } from './inquire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InquirePageRoutingModule
  ],
  declarations: [InquirePage]
})
export class InquirePageModule {}
