import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'},
{
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage),
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.page').then(m => m.TabsPage),
  },
  {
    path: 'datos',
    loadComponent: () => import('./datos/datos.page').then( m => m.DatosPage)
  },
];
