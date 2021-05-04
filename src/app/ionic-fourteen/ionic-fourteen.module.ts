import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicFourteenPageRoutingModule } from './ionic-fourteen-routing.module';

import { IonicFourteenPage } from './ionic-fourteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicFourteenPageRoutingModule
  ],
  declarations: [IonicFourteenPage]
})
export class IonicFourteenPageModule {}
