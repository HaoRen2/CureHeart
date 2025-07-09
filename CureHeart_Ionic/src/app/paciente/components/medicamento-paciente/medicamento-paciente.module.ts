import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentoPacientePageRoutingModule } from './medicamento-paciente-routing.module';

import { MedicamentoPacientePage } from './medicamento-paciente.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentoPacientePageRoutingModule,
    SharedModule
  ],
  declarations: [MedicamentoPacientePage]
})
export class MedicamentoPacientePageModule {}
