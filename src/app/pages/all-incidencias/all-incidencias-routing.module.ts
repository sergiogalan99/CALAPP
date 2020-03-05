import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllIncidenciasPage } from './all-incidencias.page';

const routes: Routes = [
  {
    path: '',
    component: AllIncidenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllIncidenciasPageRoutingModule {}
