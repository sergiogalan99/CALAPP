import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalImagenGrandePage } from './modal-imagen-grande.page';

const routes: Routes = [
  {
    path: '',
    component: ModalImagenGrandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalImagenGrandePageRoutingModule {}
