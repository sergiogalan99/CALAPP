import { AutenticacionService } from './../../services/autenticacion.service';
import { TipoIncidencia } from '../../core/model/TipoIncidencia';
import { IncidenciaService } from 'src/app/services/incidencia.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],

})
export class InicioPage {
  res: string;
  constructor(private autenticacionService: AutenticacionService, private routesv: Router) { }

  logout() {
    this.autenticacionService.logout().then(data => {
      this.routesv.navigateByUrl('/home');
    }).catch(data => {
      this.res = 'Error al cerrar sesión';
    });
  }
}
