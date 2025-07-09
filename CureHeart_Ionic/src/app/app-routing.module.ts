import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-page/auth-page.module').then( m => m.AuthPagePageModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./paciente/layout/paciente-main/paciente-main.module').then( m => m.PacienteMainPageModule)
  },
  {
    path: 'medico',
    loadChildren: () => import('./medico/layout/medico-main/medico-main.module').then( m => m.MedicoMainPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/pages/admin-page/admin-page.module').then( m => m.AdminPagePageModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
