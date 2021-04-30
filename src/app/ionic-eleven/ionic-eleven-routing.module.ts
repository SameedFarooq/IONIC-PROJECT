import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicElevenPage } from './ionic-eleven.page';

const routes: Routes = [
  {
    path: '',
    component: IonicElevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicElevenPageRoutingModule {}
