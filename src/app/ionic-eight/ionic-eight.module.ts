import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicEightPageRoutingModule } from './ionic-eight-routing.module';

import { IonicEightPage } from './ionic-eight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicEightPageRoutingModule
  ],
  declarations: [IonicEightPage]
})
export class IonicEightPageModule {}
