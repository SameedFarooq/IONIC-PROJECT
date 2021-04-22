import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicSixPageRoutingModule } from './ionic-six-routing.module';

import { IonicSixPage } from './ionic-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSixPageRoutingModule
  ],
  declarations: [IonicSixPage]
})
export class IonicSixPageModule {}
