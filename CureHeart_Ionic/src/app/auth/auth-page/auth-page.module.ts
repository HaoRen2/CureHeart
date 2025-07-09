import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPagePageRoutingModule } from './auth-page-routing.module';

import { AuthPagePage } from './auth-page.page';
import { AuthModule } from '../components/auth.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPagePageRoutingModule,
    AuthModule,

  ],
  declarations: [AuthPagePage]
})
export class AuthPagePageModule {}
