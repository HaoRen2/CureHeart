import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterMedicoPageRoutingModule } from './register-medico-routing.module';

import { RegisterMedicoPage } from './register-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterMedicoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterMedicoPage]
})
export class RegisterMedicoPageModule {}
