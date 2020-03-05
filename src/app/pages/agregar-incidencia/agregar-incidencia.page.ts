import { TipoIncidencia } from '../../core/model/TipoIncidencia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { IncidenciaService } from 'src/app/services/incidencia.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as firebase from 'firebase';


@Component({
  selector: 'app-agregar-incidencia',
  templateUrl: './agregar-incidencia.page.html',
  styleUrls: ['./agregar-incidencia.page.scss'],
})
export class AgregarIncidenciaPage {


  image: string;
  res: string;
  protected itemSeleccionado: string;
  protected myDate: string = new Date().toISOString();
  img;
  localizacion;
  descripcion;
  fecha;
  nombretipologia;


  constructor(public router: Router,
              private camera: Camera,
              private incidenciaService: IncidenciaService,
              private autenticationService: AutenticacionService) {
    this.itemSeleccionado = this.router.getCurrentNavigation().extras.state.itemSeleccionado;

  }

  getPicture() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 600,
      targetHeight: 600,
      quality: 100
    };
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
    return firebase.storage().ref().child(this.autenticationService.getCurrentUserUid()).child('imageProfile').putString(this.image, 'data_url');
  }


  enviarIncidencia() {
    const incidencia: TipoIncidencia = new TipoIncidencia(
      this.autenticationService.getCurrentUserUid(),
      this.nombretipologia = this.itemSeleccionado,
      this.fecha = this.myDate,
      "img",
      "localizacion",
      this.descripcion,
    );

    this.incidenciaService.add(incidencia).then(data => {
      this.router.navigateByUrl('/menu');
      this.autenticationService.showAlert('Incidencia registrada', 'Gracias, intentaremos solvertarlas.');
    }).catch(data => {
      this.res = 'Error al guardar incidencia';
    });

  }

}
