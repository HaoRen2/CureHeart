import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoMedicoPage } from './medicamento-medico.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentoMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentoMedicoPageRoutingModule {}
