import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicThreePageRoutingModule } from './ionic-three-routing.module';

import { IonicThreePage } from './ionic-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicThreePageRoutingModule
  ],
  declarations: [IonicThreePage]
})
export class IonicThreePageModule {}
