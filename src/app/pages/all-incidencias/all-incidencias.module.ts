import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllIncidenciasPageRoutingModule } from './all-incidencias-routing.module';

import { AllIncidenciasPage } from './all-incidencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllIncidenciasPageRoutingModule
  ],
  declarations: [AllIncidenciasPage]
})
export class AllIncidenciasPageModule {}
