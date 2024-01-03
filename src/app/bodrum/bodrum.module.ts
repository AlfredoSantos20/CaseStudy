import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodrumPageRoutingModule } from './bodrum-routing.module';

import { BodrumPage } from './bodrum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodrumPageRoutingModule
  ],
  declarations: [BodrumPage]
})
export class BodrumPageModule {}
