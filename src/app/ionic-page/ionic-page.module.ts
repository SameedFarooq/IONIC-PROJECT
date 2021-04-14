import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicPagePageRoutingModule } from './ionic-page-routing.module';

import { IonicPagePage } from './ionic-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPagePageRoutingModule
  ],
  declarations: [IonicPagePage]
})
export class IonicPagePageModule {}
