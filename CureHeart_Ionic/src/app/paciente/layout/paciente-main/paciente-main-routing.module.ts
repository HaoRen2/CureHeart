import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteMainPage } from './paciente-main.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteMainPage,
    children: [
      {
        path: 'tab',
        loadChildren: () => import('src/app/paciente/pages/paciente-page/paciente-page.module').then(m => m.PacientePagePageModule)
      },
      {
        path: 'pedir-cita-paciente',
        loadChildren: () => import('../../pages/pedir-cita-paciente/pedir-cita-paciente.module').then( m => m.PedirCitaPacientePageModule)
      },
      {
        path: '',
        redirectTo: 'tab',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteMainPageRoutingModule {}
