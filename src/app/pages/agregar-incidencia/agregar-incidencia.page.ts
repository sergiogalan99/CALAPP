import { TipoIncidencia } from './../../core/model/tipoIncidencia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { CreateIncidenciaService } from 'src/app/services/create-incidencia.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as firebase from 'firebase';


@Component({
  selector: 'app-agregar-incidencia',
  templateUrl: './agregar-incidencia.page.html',
  styleUrls: ['./agregar-incidencia.page.scss'],
})
export class AgregarIncidenciaPage {

  image: string = null;
  today = Date.now;
  status = '';
  res: string;
  fecha = new Date().getTime();

  protected itemSeleccionado: string;

  tipologia: TipoIncidencia = {
    fecha: new Date().getTime()
  };

  constructor(public router: Router, private camera: Camera, private createInicidencias: CreateIncidenciaService, private autentication: AutenticacionService) {
    this.itemSeleccionado = this.router.getCurrentNavigation().extras.state.itemSeleccionado;
    this.tipologia.nombreTipologia = this.itemSeleccionado;
    this.tipologia.img = 'data:image/jpeg;base64,${imageData}';

  }

  getPicture() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 600,
      targetHeight: 600,
      quality: 100
    }
    this.camera.getPicture(options)
      .then(imageData => {
        console.log(imageData);
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        console.error(error);
      });

  }

  addImage() {
    console.log('AddImagen');
    return firebase.storage().ref().child(this.autentication.getCurrentUserUid()).child('imageProfile').putString(this.image, 'data_url');
  }

  enviarIncidencia() {
    this.createInicidencias.addIncidencia(this.tipologia).then(data => {
      this.addImage();
      this.router.navigateByUrl('/menu');
      this.autentication.showAlert('Incidencia registrada', 'Gracias, intentaremos solvertarlas.');
    }).catch(data => {
      this.res = 'Error al guardar incidencia';
    });
  }

}
