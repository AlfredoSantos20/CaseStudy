import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntalyaPage } from './antalya.page';

const routes: Routes = [
  {
    path: '',
    component: AntalyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntalyaPageRoutingModule {}
