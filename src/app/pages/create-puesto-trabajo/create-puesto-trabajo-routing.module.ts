import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePuestoTrabajoPage } from './create-puesto-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePuestoTrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePuestoTrabajoPageRoutingModule {}
