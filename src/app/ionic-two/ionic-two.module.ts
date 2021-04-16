import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicTwoPageRoutingModule } from './ionic-two-routing.module';

import { IonicTwoPage } from './ionic-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicTwoPageRoutingModule
  ],
  declarations: [IonicTwoPage]
})
export class IonicTwoPageModule {}
