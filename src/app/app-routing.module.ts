import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
   { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule) },


  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'nueva-incidencia',
    loadChildren: () => import('./pages/nueva-incidencia/nueva-incidencia.module').then(m => m.NuevaIncidenciaPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then(m => m.EventosPageModule)
  },
  {
    path: 'puesto-trabajo',
    loadChildren: () => import('./pages/puesto-trabajo/puesto-trabajo.module').then(m => m.PuestoTrabajoPageModule)
  },
  {
    path: 'agregar-incidencia',
    loadChildren: () => import('./pages/agregar-incidencia/agregar-incidencia.module').then( m => m.AgregarIncidenciaPageModule)
  },
  {
    path: 'all-incidencias',
    loadChildren: () => import('./pages/all-incidencias/all-incidencias.module').then( m => m.AllIncidenciasPageModule)
  },
  {
    path: 'create-puesto-trabajo',
    loadChildren: () => import('./pages/create-puesto-trabajo/create-puesto-trabajo.module').then( m => m.CreatePuestoTrabajoPageModule)
  },
  {
    path: 'mis-puestos',
    loadChildren: () => import('./pages/mis-puestos/mis-puestos.module').then( m => m.MisPuestosPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'modal-imagen-grande',
    loadChildren: () => import('./pages/modal-imagen-grande/modal-imagen-grande.module').then( m => m.ModalImagenGrandePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
