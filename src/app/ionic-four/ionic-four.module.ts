import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicFourPageRoutingModule } from './ionic-four-routing.module';

import { IonicFourPage } from './ionic-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicFourPageRoutingModule
  ],
  declarations: [IonicFourPage]
})
export class IonicFourPageModule {}
