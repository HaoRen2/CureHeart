import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoMainPage } from './medico-main.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoMainPage,
    children:[
      {
        path: 'tab',
        loadChildren: () => import('../../pages/medico-page/medico-page.module').then(m => m.MedicoPagePageModule)
      },
      {
        path: 'medicamento-medico/:id',
        loadChildren: () => import('../../pages/medicamento-medico/medicamento-medico.module').then(m => m.MedicamentoMedicoPageModule)
      },
      {
        path: 'informe-medico/:id',
        loadChildren: () => import('../../pages/informe-medico/informe-medico.module').then(m => m.InformeMedicoPageModule)
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
export class MedicoMainPageRoutingModule {}
