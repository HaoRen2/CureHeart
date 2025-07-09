import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteMainPageRoutingModule } from './paciente-main-routing.module';

import { PacienteMainPage } from './paciente-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteMainPageRoutingModule
  ],
  declarations: [PacienteMainPage]
})
export class PacienteMainPageModule {}
