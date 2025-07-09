import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioMedicoPageRoutingModule } from './inicio-medico-routing.module';

import { InicioMedicoPage } from './inicio-medico.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioMedicoPageRoutingModule,
    SharedModule
  ],
  declarations: [InicioMedicoPage]
})
export class InicioMedicoPageModule {}
