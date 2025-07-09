import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPacientePageRoutingModule } from './info-paciente-routing.module';

import { InfoPacientePage } from './info-paciente.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPacientePageRoutingModule,
    SharedModule
  ],
  declarations: [InfoPacientePage]
})
export class InfoPacientePageModule {}
