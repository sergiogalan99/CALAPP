import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaIncidenciaPage } from './nueva-incidencia.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaIncidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaIncidenciaPageRoutingModule {}
