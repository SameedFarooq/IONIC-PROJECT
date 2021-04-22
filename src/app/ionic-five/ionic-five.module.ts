import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicFivePageRoutingModule } from './ionic-five-routing.module';

import { IonicFivePage } from './ionic-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicFivePageRoutingModule
  ],
  declarations: [IonicFivePage]
})
export class IonicFivePageModule {}
