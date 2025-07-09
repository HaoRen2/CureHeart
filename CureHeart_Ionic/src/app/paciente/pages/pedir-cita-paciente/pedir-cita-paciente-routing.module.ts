import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedirCitaPacientePage } from './pedir-cita-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: PedirCitaPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedirCitaPacientePageRoutingModule {}
