import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IstanbulPageRoutingModule } from './istanbul-routing.module';

import { IstanbulPage } from './istanbul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstanbulPageRoutingModule
  ],
  declarations: [IstanbulPage]
})
export class IstanbulPageModule {}
