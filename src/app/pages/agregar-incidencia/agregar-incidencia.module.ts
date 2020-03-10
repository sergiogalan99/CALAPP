import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarIncidenciaPageRoutingModule } from './agregar-incidencia-routing.module';

import { AgregarIncidenciaPage } from './agregar-incidencia.page';

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
    IonicModule,
    AgregarIncidenciaPageRoutingModule
  ],
  declarations: [AgregarIncidenciaPage]
})
export class AgregarIncidenciaPageModule {}
