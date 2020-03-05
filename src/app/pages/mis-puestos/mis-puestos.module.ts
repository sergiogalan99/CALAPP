import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPuestosPageRoutingModule } from './mis-puestos-routing.module';

import { MisPuestosPage } from './mis-puestos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPuestosPageRoutingModule
  ],
  declarations: [MisPuestosPage]
})
export class MisPuestosPageModule {}
