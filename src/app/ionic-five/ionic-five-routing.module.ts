import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicFivePage } from './ionic-five.page';

const routes: Routes = [
  {
    path: '',
    component: IonicFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicFivePageRoutingModule {}
