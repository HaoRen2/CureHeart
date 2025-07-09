import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPagePage } from './admin-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPagePage,
    children: [
      {
        path: 'inicio-admin',
        loadChildren: () => import('../../components/inicio-admin/inicio-admin.module').then(m => m.InicioAdminPageModule)
      },
      {
        path: 'medico-gestion',
        loadChildren: () => import('../../components/medico-gestion/medico-gestion.module').then(m => m.MedicoGestionPageModule)
      },
      {
        path: '',
        redirectTo: 'inicio-admin',
        pathMatch: 'full'
      },
    ]
  },
  {

      path: 'register-medico',
      loadChildren: () => import('../../components/register-medico/register-medico.module').then(m => m.RegisterMedicoPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPagePageRoutingModule {}
