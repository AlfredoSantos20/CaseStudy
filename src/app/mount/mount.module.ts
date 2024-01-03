import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MountPageRoutingModule } from './mount-routing.module';

import { MountPage } from './mount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MountPageRoutingModule
  ],
  declarations: [MountPage]
})
export class MountPageModule {}
