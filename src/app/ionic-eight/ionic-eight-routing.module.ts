import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicEightPage } from './ionic-eight.page';

const routes: Routes = [
  {
    path: '',
    component: IonicEightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicEightPageRoutingModule {}
