import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicPagePage } from './ionic-page.page';

const routes: Routes = [
  {
    path: '',
    component: IonicPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicPagePageRoutingModule {}
