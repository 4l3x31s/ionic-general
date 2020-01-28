import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FingerAuthPageRoutingModule } from './finger-auth-routing.module';

import { FingerAuthPage } from './finger-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FingerAuthPageRoutingModule
  ],
  declarations: [FingerAuthPage]
})
export class FingerAuthPageModule {}
