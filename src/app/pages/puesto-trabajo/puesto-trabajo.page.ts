import { Puestotrabajo } from './../../core/model/PuestoTrabajo';
import { PuestoTrabajoService } from '../../services/puesto-trabajo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-puesto-trabajo',
  templateUrl: './puesto-trabajo.page.html',
  styleUrls: ['./puesto-trabajo.page.scss'],
})
export class PuestoTrabajoPage {
  private puestos: Array<any>;

  constructor(private puestoService: PuestoTrabajoService,
              private loadingCtrl: LoadingController,
              public modalCtrl: ModalController) {
  }

  ionViewDidEnter() {
    this.puestos = [];
    this.getAll();
  }

  async showModal(puesto) {
   
    const myModalPage = await this.modalCtrl.create(
      {
        component: ModalPage,
        componentProps: {
          'puesto': new Puestotrabajo(puesto.idUser, puesto.profesion, puesto.caracteristicas, puesto.salario, puesto.email, puesto.telefono, puesto.trabajadores)

        }
      });

    return await myModalPage.present();
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
