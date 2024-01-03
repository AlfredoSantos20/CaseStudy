import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspendosPage } from './aspendos.page';

const routes: Routes = [
  {
    path: '',
    component: AspendosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AspendosPageRoutingModule {}
