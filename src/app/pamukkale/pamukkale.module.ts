import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PamukkalePageRoutingModule } from './pamukkale-routing.module';

import { PamukkalePage } from './pamukkale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PamukkalePageRoutingModule
  ],
  declarations: [PamukkalePage]
})
export class PamukkalePageModule {}
