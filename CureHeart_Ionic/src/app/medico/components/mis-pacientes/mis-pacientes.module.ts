import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPacientesPageRoutingModule } from './mis-pacientes-routing.module';

import { MisPacientesPage } from './mis-pacientes.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {SharedModule} from "../../../shared/components/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPacientesPageRoutingModule,
    NgxDatatableModule,
    SharedModule
  ],
  declarations: [MisPacientesPage]
})
export class MisPacientesPageModule {}
