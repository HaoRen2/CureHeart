import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterMedicoPage } from './register-medico.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterMedicoPageRoutingModule {}
