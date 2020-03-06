import { Localizacion } from './../../core/model/Localizacion';
import { TipoIncidencia } from '../../core/model/TipoIncidencia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { IncidenciaService } from 'src/app/services/incidencia.service';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';
declare var google;

@Component({
  selector: 'app-agregar-incidencia',
  templateUrl: './agregar-incidencia.page.html',
  styleUrls: ['./agregar-incidencia.page.scss'],
})
export class AgregarIncidenciaPage implements OnInit {

  mapRef = null;
  image: string;
  res: string;
  protected itemSeleccionado: string;
  protected myDate: string = new Date().toISOString();
  img;
  localizacion;
  descripcion;
  fecha;
  nombretipologia;
  geolocalizacion;

  constructor(private geolocation: Geolocation,
              private loadingCtrl: LoadingController,
              public router: Router,
              private camera: Camera,
              private incidenciaService: IncidenciaService,
              private autenticationService: AutenticacionService) {
              this.itemSeleccionado = this.router.getCurrentNavigation().extras.state.itemSeleccionado;
  }

  ngOnInit() {
    this.loadMap();
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

  addImage(imageName: string) {
    return firebase.storage().ref().child('incidencias').child(imageName).putString(this.image, 'data_url');
  }


  enviarIncidencia() {
    console.log(this.geolocalizacion);
    const incidencia: TipoIncidencia = new TipoIncidencia(
      this.autenticationService.getCurrentUserUid(),
      this.nombretipologia = this.itemSeleccionado,
      this.fecha = this.myDate,
      'localizacion',
      this.descripcion,
    );

    this.incidenciaService.add(incidencia).then(data => {
      this.addImage(data.id);
      this.router.navigateByUrl('/menu');
      this.autenticationService.showAlert('Incidencia registrada', 'Gracias, intentaremos solvemtarlas lo antes posible.');
    }).catch(data => {
      this.res = 'Error al guardar incidencia';
    });

  }

  async loadMap() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    this.geolocalizacion = new Localizacion(myLatLng.lat, myLatLng.lng);
    console.log('Latitud: ' + myLatLng.lat + ' Longitud: ' + myLatLng.lng);
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
      .addListenerOnce(this.mapRef, 'idle', () => {
        loading.dismiss();
        this.addMaker(myLatLng.lat, myLatLng.lng);
      });
  }

  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: 'Hello World!'
    });
  }

  private async getLocation(): Promise<any> {
    const rta = await this.geolocation.getCurrentPosition();
    console.log(rta.coords);
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }


}
