import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPacientesPage } from './mis-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: MisPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPacientesPageRoutingModule {}
