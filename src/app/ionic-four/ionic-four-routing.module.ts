import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicFourPage } from './ionic-four.page';

const routes: Routes = [
  {
    path: '',
    component: IonicFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicFourPageRoutingModule {}
