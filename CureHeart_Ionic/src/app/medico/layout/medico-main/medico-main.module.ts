import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoMainPageRoutingModule } from './medico-main-routing.module';

import { MedicoMainPage } from './medico-main.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoMainPageRoutingModule,
    SharedModule
  ],
  declarations: [MedicoMainPage]
})
export class MedicoMainPageModule {}
