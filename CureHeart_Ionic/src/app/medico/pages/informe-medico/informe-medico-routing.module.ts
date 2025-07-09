import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformeMedicoPage } from './informe-medico.page';

const routes: Routes = [
  {
    path: '',
    component: InformeMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformeMedicoPageRoutingModule {}
