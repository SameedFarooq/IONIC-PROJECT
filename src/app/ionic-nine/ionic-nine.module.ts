import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicNinePageRoutingModule } from './ionic-nine-routing.module';

import { IonicNinePage } from './ionic-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicNinePageRoutingModule
  ],
  declarations: [IonicNinePage]
})
export class IonicNinePageModule {}
