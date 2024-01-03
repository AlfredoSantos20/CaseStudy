import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodrumPage } from './bodrum.page';

const routes: Routes = [
  {
    path: '',
    component: BodrumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodrumPageRoutingModule {}
