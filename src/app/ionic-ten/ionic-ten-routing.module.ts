import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicTenPage } from './ionic-ten.page';

const routes: Routes = [
  {
    path: '',
    component: IonicTenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicTenPageRoutingModule {}
