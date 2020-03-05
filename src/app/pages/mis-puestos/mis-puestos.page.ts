import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from './../../services/autenticacion.service';
import { PuestoTrabajoService } from '../../services/puesto-trabajo.service';
import { Puestotrabajo } from '../../core/model/PuestoTrabajo';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-puestos',
  templateUrl: './mis-puestos.page.html',
  styleUrls: ['./mis-puestos.page.scss'],
})
export class MisPuestosPage {
  private puestos: Array<any>;

  constructor(private puestosService: PuestoTrabajoService) {
  }

  ionViewDidEnter() {
    this.puestos = [];
    this.getAllCurrentUser();
  }

  getAllCurrentUser() {
    this.puestosService.getAllCurrentUser().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data());
        this.puestos.push({id: doc.id, data: doc.data()});
      });
    });
  }

  delete(id: string) {
    this.puestosService.delete(id).then(() => {
      this.puestos = [];
      this.getAllCurrentUser();
    });
  }
}
