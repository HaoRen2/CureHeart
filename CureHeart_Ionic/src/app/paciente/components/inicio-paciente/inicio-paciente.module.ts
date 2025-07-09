import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPacientePageRoutingModule } from './inicio-paciente-routing.module';

import { InicioPacientePage } from './inicio-paciente.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPacientePageRoutingModule,
    SharedModule
  ],
  declarations: [InicioPacientePage]
})
export class InicioPacientePageModule {}
