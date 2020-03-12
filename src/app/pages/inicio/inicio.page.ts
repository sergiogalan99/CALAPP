import { AutenticacionService } from './../../services/autenticacion.service';
import { TipoIncidencia } from '../../core/model/TipoIncidencia';
import { IncidenciaService } from 'src/app/services/incidencia.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';


declare var google;


interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],

})
export class InicioPage {
  res: string;
  map = null;
  direccion: string;

  constructor() { }

  ionViewDidEnter() {
    this.loadMap();
  }


  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = { lat: 38.887100, lng: -6.387472 };
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }



    }






