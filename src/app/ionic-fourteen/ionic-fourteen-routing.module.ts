import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicFourteenPage } from './ionic-fourteen.page';

const routes: Routes = [
  {
    path: '',
    component: IonicFourteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicFourteenPageRoutingModule {}
