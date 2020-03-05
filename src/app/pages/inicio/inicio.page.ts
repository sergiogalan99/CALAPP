import { AutenticacionService } from './../../services/autenticacion.service';
import { TipoIncidencia } from './../../core/model/tipoIncidencia';
import { CreateIncidenciaService } from 'src/app/services/create-incidencia.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],

})
export class InicioPage implements OnInit {
  res: string;
  private incidencias: Observable<TipoIncidencia[]>;
  constructor(private fbService: CreateIncidenciaService, private autenticacion: AutenticacionService, private routesv: Router) { }

  ngOnInit(): void {
    this.incidencias = this.fbService.getIncidencias();
  }

  logout() {
    this.autenticacion.logout().then(data => {
      this.routesv.navigateByUrl('/home');
    }).catch(data => {
      this.res = 'Error al cerrar sesión';
    });
}
}
