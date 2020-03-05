import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPuestosPage } from './mis-puestos.page';

const routes: Routes = [
  {
    path: '',
    component: MisPuestosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPuestosPageRoutingModule {}
