import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformeMedicoPageRoutingModule } from './informe-medico-routing.module';

import { InformeMedicoPage } from './informe-medico.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformeMedicoPageRoutingModule,
    SharedModule
  ],
  declarations: [InformeMedicoPage]
})
export class InformeMedicoPageModule {}
