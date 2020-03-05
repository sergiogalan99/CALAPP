import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaIncidenciaPageRoutingModule } from './nueva-incidencia-routing.module';

import { NuevaIncidenciaPage } from './nueva-incidencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaIncidenciaPageRoutingModule
  ],
  declarations: [NuevaIncidenciaPage]
})
export class NuevaIncidenciaPageModule {}
