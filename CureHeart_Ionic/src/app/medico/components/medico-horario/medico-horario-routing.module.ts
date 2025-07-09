import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoHorarioPage } from './medico-horario.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoHorarioPageRoutingModule {}
