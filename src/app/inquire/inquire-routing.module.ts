import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquirePage } from './inquire.page';

const routes: Routes = [
  {
    path: '',
    component: InquirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquirePageRoutingModule {}
