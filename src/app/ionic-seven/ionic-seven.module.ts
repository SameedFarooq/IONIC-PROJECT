import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicSevenPageRoutingModule } from './ionic-seven-routing.module';

import { IonicSevenPage } from './ionic-seven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSevenPageRoutingModule
  ],
  declarations: [IonicSevenPage]
})
export class IonicSevenPageModule {}
