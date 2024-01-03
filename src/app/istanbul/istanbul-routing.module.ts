import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IstanbulPage } from './istanbul.page';

const routes: Routes = [
  {
    path: '',
    component: IstanbulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IstanbulPageRoutingModule {}
