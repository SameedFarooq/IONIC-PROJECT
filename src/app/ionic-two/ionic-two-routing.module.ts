import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicTwoPage } from './ionic-two.page';

const routes: Routes = [
  {
    path: '',
    component: IonicTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicTwoPageRoutingModule {}
