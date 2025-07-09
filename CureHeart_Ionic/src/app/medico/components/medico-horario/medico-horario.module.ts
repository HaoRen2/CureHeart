import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoHorarioPageRoutingModule } from './medico-horario-routing.module';

import { MedicoHorarioPage } from './medico-horario.page';
import {SharedModule} from "../../../shared/components/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoHorarioPageRoutingModule,
    SharedModule
  ],
  declarations: [MedicoHorarioPage]
})
export class MedicoHorarioPageModule {}
