import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicElevenPageRoutingModule } from './ionic-eleven-routing.module';

import { IonicElevenPage } from './ionic-eleven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicElevenPageRoutingModule
  ],
  declarations: [IonicElevenPage]
})
export class IonicElevenPageModule {}
