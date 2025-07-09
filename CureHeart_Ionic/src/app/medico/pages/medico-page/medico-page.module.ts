import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoPagePageRoutingModule } from './medico-page-routing.module';

import { MedicoPagePage } from './medico-page.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoPagePageRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [MedicoPagePage]
})
export class MedicoPagePageModule {}
