import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoGestionPageRoutingModule } from './medico-gestion-routing.module';

import { MedicoGestionPage } from './medico-gestion.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoGestionPageRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [MedicoGestionPage]
})
export class MedicoGestionPageModule {}
