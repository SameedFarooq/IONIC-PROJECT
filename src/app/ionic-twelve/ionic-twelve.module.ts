import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicTwelvePageRoutingModule } from './ionic-twelve-routing.module';

import { IonicTwelvePage } from './ionic-twelve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicTwelvePageRoutingModule
  ],
  declarations: [IonicTwelvePage]
})
export class IonicTwelvePageModule {}
