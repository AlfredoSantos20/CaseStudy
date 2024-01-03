import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelsusPageRoutingModule } from './celsus-routing.module';

import { CelsusPage } from './celsus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelsusPageRoutingModule
  ],
  declarations: [CelsusPage]
})
export class CelsusPageModule {}
