import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedirCitaPacientePageRoutingModule } from './pedir-cita-paciente-routing.module';

import { PedirCitaPacientePage } from './pedir-cita-paciente.page';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedirCitaPacientePageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule

  ],
  declarations: [PedirCitaPacientePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PedirCitaPacientePageModule {}
