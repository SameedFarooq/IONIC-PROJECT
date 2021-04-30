import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicThirteenPage } from './ionic-thirteen.page';

const routes: Routes = [
  {
    path: '',
    component: IonicThirteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicThirteenPageRoutingModule {}
