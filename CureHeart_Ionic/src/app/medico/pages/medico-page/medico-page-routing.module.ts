import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoPagePage } from './medico-page.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoPagePage,
    children: [
      {
        path: 'mis-pacientes',
        loadChildren: () => import('../../../medico/components/mis-pacientes/mis-pacientes.module').then( m => m.MisPacientesPageModule)
      },
      {
        path: 'medico-horario',
        loadChildren: () => import('../../../medico/components/medico-horario/medico-horario.module').then( m => m.MedicoHorarioPageModule)
      },
      {
        path: 'inicio-medico',
        loadChildren: () => import('../../../medico/components/inicio-medico/inicio-medico.module').then( m => m.InicioMedicoPageModule)
      },
      {
        path: '',
        redirectTo: 'inicio-medico',
        pathMatch: 'full'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoPagePageRoutingModule {}
