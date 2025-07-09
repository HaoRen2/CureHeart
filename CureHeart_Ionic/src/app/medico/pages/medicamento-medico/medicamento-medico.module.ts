import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentoMedicoPageRoutingModule } from './medicamento-medico-routing.module';

import { MedicamentoMedicoPage } from './medicamento-medico.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentoMedicoPageRoutingModule,
    SharedModule
  ],
  declarations: [MedicamentoMedicoPage]
})
export class MedicamentoMedicoPageModule {}
