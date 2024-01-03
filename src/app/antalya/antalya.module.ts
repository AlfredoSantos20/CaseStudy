import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntalyaPageRoutingModule } from './antalya-routing.module';

import { AntalyaPage } from './antalya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntalyaPageRoutingModule
  ],
  declarations: [AntalyaPage]
})
export class AntalyaPageModule {}
