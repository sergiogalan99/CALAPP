import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuestoTrabajoPageRoutingModule } from './puesto-trabajo-routing.module';

import { PuestoTrabajoPage } from './puesto-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuestoTrabajoPageRoutingModule
  ],
  declarations: [PuestoTrabajoPage]
})
export class PuestoTrabajoPageModule {}
