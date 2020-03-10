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
export class InicioPage implements OnInit {
  res: string;
  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 38.681729,
        lng: -6.412051,
      },
      title: 'Tienda',
    },
    {
      position: {
        lat: 4.667945861816406,
        lng: -74.09964752197266,
      },
      title: 'Jardín Botánico'
    },
    {
      position: {
        lat: 4.676802158355713,
        lng: -74.04825592041016,
      },
      title: 'Parque la 93'
    },
    {
      position: {
        lat: 4.6554284,
        lng: -74.1094989,
      },
      title: 'Maloka'
    },
  ];
  constructor(private geolocation: Geolocation) { }

  ngOnInit(): void {
   this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 38.676928, lng:  -6.414471};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }


//   async loadMap() {
//     const loading = await this.loadingCtrl.create();
//     loading.present();
//     const myLatLng = await this.getLocation();
//     //this.getGeoencoder(myLatLng.lat, myLatLng.lng);
//     //console.log('Latitud: ' + myLatLng.lat + ' Longitud: ' + myLatLng.lng);
//     const mapEle: HTMLElement = document.getElementById('map');
//     this.mapRef = new google.maps.Map(mapEle, {
//       center: myLatLng,
//       zoom: 10,
//     });

//     google.maps.event
//       .addListenerOnce(this.mapRef, 'idle', () => {
//         loading.dismiss();
//         this.addMaker(myLatLng.lat, myLatLng.lng);
//       });
//   }

//   private addMaker(lat: number, lng: number) {
//     const marker = new google.maps.Marker({
//       position: { lat, lng },
//       map: this.mapRef,
//     });
//   }

//   private async getLocation(): Promise<any> {
//     const rta = await this.geolocation.getCurrentPosition();
//     return {
//       lat: rta.coords.latitude,
//       lng: rta.coords.longitude
//     };
//   }

//  /* getGeoencoder(latitude, longitude){
//     this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions).then((results: NativeGeocoderResult[]) => {
//       this.geoAddress = this.generateAddress(results[0]);
//     });


//   generateAddress(addressObj){
//     let obj = [];
//     let address = "";
//     for (let key in addressObj) {
//       obj.push(addressObj[key]);
//     }
//     obj.reverse();
//     for (let val in obj) {
//       if(obj[val].length)
//       address += obj[val]+', ';
//     }
//   return address.slice(0, -2);
// }*/

}



