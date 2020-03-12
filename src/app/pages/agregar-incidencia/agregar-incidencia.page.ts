
import { TipoIncidencia } from '../../core/model/TipoIncidencia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { IncidenciaService } from 'src/app/services/incidencia.service';

import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-agregar-incidencia',
  templateUrl: './agregar-incidencia.page.html',
  styleUrls: ['./agregar-incidencia.page.scss'],
})
export class AgregarIncidenciaPage  {

  image: string;
  res: string;
  itemSeleccionado: string;
  myDate: string = new Date().toISOString();
  img;
  localizacion;
  descripcion;
  grupoControl: FormGroup;
  resultadoImage: any;

 


  constructor(
              private loadingCtrl: LoadingController,
              public router: Router,
              private camera: Camera,
              private incidenciaService: IncidenciaService,
              private autenticationService: AutenticacionService,
             ) {
              this.crearGrupoControl();
              this.itemSeleccionado = this.router.getCurrentNavigation().extras.state.itemSeleccionado;
  }


  private crearGrupoControl() {
    this.grupoControl = new FormGroup({
      regexDescripcion: new FormControl(
        Validators.required,
        Validators.compose([ Validators.required, Validators.minLength(5)])
      ),

    });
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
        this.resultadoImage = imageData;
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        console.error(error);
      });

  }
  getGalery() {
    const optionsGalery: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 600,
      targetHeight: 600,
      quality: 100
    };
    this.camera.getPicture(optionsGalery)
      .then(imageData => {
        this.resultadoImage = imageData;
        console.log(imageData);
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        console.error(error);
      });

  }

  addImage(imageName: string) {
    return firebase.storage().ref().child('incidencias').child(imageName).putString(this.image, 'data_url');
  }


  async enviarIncidencia() {

    const incidencia: TipoIncidencia = new TipoIncidencia(
      this.autenticationService.getCurrentUserUid(),
      this.itemSeleccionado,
      this.myDate,
      this.descripcion,
    );

    
    if ((this.grupoControl.valid) && (this.resultadoImage.length > 0)) {
     
      const loading = await this.loadingCtrl.create();
      loading.present();
    this.incidenciaService.add(incidencia).then(data => {
          this.addImage(data.id);
          this.loadingCtrl.dismiss();
          this.router.navigateByUrl('/menu');
          this.autenticationService.showAlert('Incidencia registrada', 'Gracias, intentaremos solventarlas lo antes posible.');
    }).catch(data => {
      this.res = 'Error al guardar incidencia';
    });
  }else{
    this.res = 'Por favor rellena todo los campos (Foto incluida)';
  }
  }





}
