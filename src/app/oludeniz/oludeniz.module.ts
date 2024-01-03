import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OludenizPageRoutingModule } from './oludeniz-routing.module';

import { OludenizPage } from './oludeniz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OludenizPageRoutingModule
  ],
  declarations: [OludenizPage]
})
export class OludenizPageModule {}
