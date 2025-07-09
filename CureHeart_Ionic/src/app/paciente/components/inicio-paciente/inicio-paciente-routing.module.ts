import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPacientePage } from './inicio-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPacientePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPacientePageRoutingModule {}
