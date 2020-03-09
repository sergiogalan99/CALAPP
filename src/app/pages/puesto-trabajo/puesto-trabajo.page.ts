import { PuestoTrabajoService } from '../../services/puesto-trabajo.service';
import { Puestotrabajo } from '../../core/model/PuestoTrabajo';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-puesto-trabajo',
  templateUrl: './puesto-trabajo.page.html',
  styleUrls: ['./puesto-trabajo.page.scss'],
})
export class PuestoTrabajoPage {
  private puestos: Array<any>;

  constructor(private puestoService: PuestoTrabajoService,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.puestos = [];
    this.getAll();
  }

  async getAll() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.puestoService.getAll().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data());
        this.puestos.push(doc.data());
      });
    });
    loading.dismiss();
  }
}
