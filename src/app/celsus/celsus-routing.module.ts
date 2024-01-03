import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelsusPage } from './celsus.page';

const routes: Routes = [
  {
    path: '',
    component: CelsusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelsusPageRoutingModule {}
