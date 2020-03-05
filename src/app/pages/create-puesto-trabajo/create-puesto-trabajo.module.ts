import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePuestoTrabajoPageRoutingModule } from './create-puesto-trabajo-routing.module';

import { CreatePuestoTrabajoPage } from './create-puesto-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePuestoTrabajoPageRoutingModule
  ],
  declarations: [CreatePuestoTrabajoPage]
})
export class CreatePuestoTrabajoPageModule {}
