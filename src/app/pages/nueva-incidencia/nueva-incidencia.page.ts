import { Tipologia } from '../../core/model/Tipologia';
import { Component} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-nueva-incidencia',
  templateUrl: './nueva-incidencia.page.html',
  styleUrls: ['./nueva-incidencia.page.scss'],
})
export class NuevaIncidenciaPage {
  private arrayTipologia: string[] = [];
  constructor(public router: Router) {

    Object.keys(Tipologia).forEach(key => this.arrayTipologia.push(Tipologia[key]));
    this.arrayTipologia.pop();
  }

  public tipologiaSeleccionada(itemSeleccionado) {
    const navigationExtras: NavigationExtras = {
      state: {
        itemSeleccionado: itemSeleccionado
      }
    };
    this.router.navigate(['agregar-incidencia'], navigationExtras);
  }

}
