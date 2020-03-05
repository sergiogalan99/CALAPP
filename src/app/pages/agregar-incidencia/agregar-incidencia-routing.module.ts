import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarIncidenciaPage } from './agregar-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarIncidenciaPageRoutingModule {}
