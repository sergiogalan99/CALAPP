import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuestoTrabajoPage } from './puesto-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: PuestoTrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuestoTrabajoPageRoutingModule {}
