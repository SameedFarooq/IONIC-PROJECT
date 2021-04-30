import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicThirteenPageRoutingModule } from './ionic-thirteen-routing.module';

import { IonicThirteenPage } from './ionic-thirteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicThirteenPageRoutingModule
  ],
  declarations: [IonicThirteenPage]
})
export class IonicThirteenPageModule {}
