import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarIncidenciaPageRoutingModule } from './agregar-incidencia-routing.module';

import { AgregarIncidenciaPage } from './agregar-incidencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarIncidenciaPageRoutingModule
  ],
  declarations: [AgregarIncidenciaPage]
})
export class AgregarIncidenciaPageModule {}
