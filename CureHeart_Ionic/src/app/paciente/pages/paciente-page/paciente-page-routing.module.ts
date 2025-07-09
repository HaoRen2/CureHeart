import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientePagePage } from './paciente-page.page';

const routes: Routes = [
  {
    path: '',
    component: PacientePagePage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('src/app/paciente/components/inicio-paciente/inicio-paciente.module').then(m => m.InicioPacientePageModule)
      },
      {
        path: 'cita-paciente',
        loadChildren: () => import('src/app/paciente/components/cita-paciente/cita-paciente.module').then(m => m.CitaPacientePageModule)
      },
      {
        path: 'medicamento-paciente',
        loadChildren: () => import('src/app/paciente/components/medicamento-paciente/medicamento-paciente.module').then(m => m.MedicamentoPacientePageModule)
      },
      {
        path: 'info-paciente',
        loadChildren: () => import('src/app/paciente/components/info-paciente/info-paciente.module').then(m => m.InfoPacientePageModule)
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientePagePageRoutingModule { }
