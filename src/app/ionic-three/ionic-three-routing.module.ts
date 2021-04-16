import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicThreePage } from './ionic-three.page';

const routes: Routes = [
  {
    path: '',
    component: IonicThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicThreePageRoutingModule {}
