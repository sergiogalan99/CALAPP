import { Puestotrabajo } from '../../core/model/PuestoTrabajo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuestoTrabajoService } from 'src/app/services/puesto-trabajo.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-create-puesto-trabajo',
  templateUrl: './create-puesto-trabajo.page.html',
  styleUrls: ['./create-puesto-trabajo.page.scss'],
})
export class CreatePuestoTrabajoPage implements OnInit {
  res;
  profesion;
  caracteristicas;
  salario;
  email;
  telefono;
  trabajadores;

  constructor(public router: Router, 
              private puestosService: PuestoTrabajoService,
              private autentication: AutenticacionService,
              private loadingCtrl: LoadingController) {

  }

  ngOnInit() {
  }
  async enviarPuesto() {
  
    const puesto: Puestotrabajo = new Puestotrabajo(
      this.autentication.getCurrentUserUid(),
      this.profesion,
      this.caracteristicas,
      this.salario,
      this.email,
      this.telefono,
      this.trabajadores,
    );
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.puestosService.add(puesto).then(data => {
      loading.dismiss();
      this.router.navigateByUrl('/puesto-trabajo');
    }).catch(data => {
      this.res = 'Error al guardar puesto';
    });

  }
}
