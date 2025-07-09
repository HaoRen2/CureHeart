import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientePagePageRoutingModule } from './paciente-page-routing.module';

import { PacientePagePage } from './paciente-page.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientePagePageRoutingModule,
    SharedModule
  ],
  declarations: [PacientePagePage]
})
export class PacientePagePageModule {}
