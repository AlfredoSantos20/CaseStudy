import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AspendosPageRoutingModule } from './aspendos-routing.module';

import { AspendosPage } from './aspendos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AspendosPageRoutingModule
  ],
  declarations: [AspendosPage]
})
export class AspendosPageModule {}
