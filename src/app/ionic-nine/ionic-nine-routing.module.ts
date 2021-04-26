import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicNinePage } from './ionic-nine.page';

const routes: Routes = [
  {
    path: '',
    component: IonicNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicNinePageRoutingModule {}
