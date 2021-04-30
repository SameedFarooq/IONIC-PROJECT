import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicTwelvePage } from './ionic-twelve.page';

const routes: Routes = [
  {
    path: '',
    component: IonicTwelvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicTwelvePageRoutingModule {}
