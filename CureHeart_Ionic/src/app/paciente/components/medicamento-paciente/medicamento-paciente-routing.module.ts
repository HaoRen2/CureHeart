import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoPacientePage } from './medicamento-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentoPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentoPacientePageRoutingModule {}
