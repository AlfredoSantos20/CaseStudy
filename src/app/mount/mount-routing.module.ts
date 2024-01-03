import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MountPage } from './mount.page';

const routes: Routes = [
  {
    path: '',
    component: MountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MountPageRoutingModule {}
