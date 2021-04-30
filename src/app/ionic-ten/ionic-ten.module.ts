import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicTenPageRoutingModule } from './ionic-ten-routing.module';

import { IonicTenPage } from './ionic-ten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicTenPageRoutingModule
  ],
  declarations: [IonicTenPage]
})
export class IonicTenPageModule {}
