import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitaPacientePageRoutingModule } from './cita-paciente-routing.module';

import { CitaPacientePage } from './cita-paciente.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitaPacientePageRoutingModule,
    SharedModule
  ],
  declarations: [CitaPacientePage]
})
export class CitaPacientePageModule {}
