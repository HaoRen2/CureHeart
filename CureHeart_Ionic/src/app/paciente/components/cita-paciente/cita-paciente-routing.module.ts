import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitaPacientePage } from './cita-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: CitaPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitaPacientePageRoutingModule {}
