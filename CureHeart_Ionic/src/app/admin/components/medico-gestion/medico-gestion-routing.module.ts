import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoGestionPage } from './medico-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoGestionPageRoutingModule {}
