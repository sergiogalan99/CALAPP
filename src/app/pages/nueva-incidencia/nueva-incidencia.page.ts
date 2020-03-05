import { Tipologia } from './../../core/model/tipologia';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-nueva-incidencia',
  templateUrl: './nueva-incidencia.page.html',
  styleUrls: ['./nueva-incidencia.page.scss'],
})
export class NuevaIncidenciaPage {
  private arrayTipologia: string[] = [];
  constructor(public router: Router) {
    for (let index = 0; index < Object.keys(Tipologia).length / 2; index++) {
      this.arrayTipologia.push(Tipologia[index].toString());
    }
  }



  public tipologiaSeleccionada(itemSeleccionado) {
    let navigationExtras: NavigationExtras = {
      state: {
        itemSeleccionado: itemSeleccionado
      }
    }
    this.router.navigate(['agregar-incidencia'], navigationExtras);
  }

}
