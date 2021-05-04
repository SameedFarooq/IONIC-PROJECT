import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicFifteenPage } from './ionic-fifteen.page';

const routes: Routes = [
  {
    path: '',
    component: IonicFifteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicFifteenPageRoutingModule {}
