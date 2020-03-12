import { Puestotrabajo } from '../../core/model/PuestoTrabajo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuestoTrabajoService } from 'src/app/services/puesto-trabajo.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  name: string;
  grupoControl: FormGroup;
  respuesta = false;
  constructor(public router: Router,
              private puestosService: PuestoTrabajoService,
              private autentication: AutenticacionService,
              private loadingCtrl: LoadingController,
  ) {

    this.crearGrupoControl();

  }

  ngOnInit() {
  }

   private crearGrupoControl() {
    this.grupoControl = new FormGroup({
      regexTrabajadores: new FormControl(
        Validators.required,
        Validators.compose([ Validators.required, Validators.pattern('^[0-9]*$')]),
      ),
      regexSalario: new FormControl(
        Validators.required,
        Validators.compose([ Validators.required, Validators.pattern('^[0-9]*$')])
      ),
      regexProfesion: new FormControl(
        Validators.required,
        Validators.compose([ Validators.required, Validators.pattern('^[a-zA-Z]*$')])
      ),
      regexCaracteristicas: new FormControl(
        Validators.required,
        Validators.compose([ Validators.required, Validators.minLength(5)])
      ),
      regexTelefono: new FormControl(
        Validators.required,
        Validators.compose([ Validators.required, Validators.pattern('^[6|7|8|9][0-9]{8}$')])
      ),
      regexCorreo: new FormControl(
        Validators.required,
        Validators.compose([ Validators.required, Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')])
      ),
    });
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

    if (this.grupoControl.valid) {
      const loading = await this.loadingCtrl.create();
      loading.present();
      this.puestosService.add(puesto).then(data => {
        loading.dismiss();
        this.router.navigateByUrl('/puesto-trabajo');
      }).catch(data => {
        this.res = 'Error al guardar puesto de trabajo';
      });
     } else {
      this.res = 'Campos incompletos';
     }
  }
}

