import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OludenizPage } from './oludeniz.page';

const routes: Routes = [
  {
    path: '',
    component: OludenizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OludenizPageRoutingModule {}
