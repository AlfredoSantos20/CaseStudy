import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PamukkalePage } from './pamukkale.page';

const routes: Routes = [
  {
    path: '',
    component: PamukkalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PamukkalePageRoutingModule {}
