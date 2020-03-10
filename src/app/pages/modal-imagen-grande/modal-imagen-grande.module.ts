import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalImagenGrandePageRoutingModule } from './modal-imagen-grande-routing.module';

import { ModalImagenGrandePage } from './modal-imagen-grande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalImagenGrandePageRoutingModule
  ],
  declarations: [ModalImagenGrandePage]
})
export class ModalImagenGrandePageModule {}
