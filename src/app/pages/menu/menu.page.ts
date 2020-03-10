import { MenuSlides } from './../../core/model/MenuSlides';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { ModalImagenGrandePage } from '../modal-imagen-grande/modal-imagen-grande.page';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  email = '';
  password = '';
  status = ''; 
  res: string;
  private arrayMenuSlide: string[] = [];

  constructor(private autenticacion: AutenticacionService,
              private routesv: Router,
              private loadingCtrl: LoadingController,
              public modalCtrl: ModalController) {
            
    Object.keys(MenuSlides).forEach(key => this.arrayMenuSlide.push(MenuSlides[key]));
    this.arrayMenuSlide.pop();
  }


  async logout() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.autenticacion.logout().then(data => {
      loading.dismiss();
      this.routesv.navigateByUrl('/home');
    }).catch(data => {
      this.res = 'Error al cerrar sesión';
    });

    



  }
  async incidencia() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.routesv.navigateByUrl('/nueva-incidencia').then(() => {
      loading.dismiss();
    });
  }

  async showModal(img) {
   
    const myModalPage = await this.modalCtrl.create(
      {
        component: ModalImagenGrandePage,
        componentProps: {
          'img': img

        }
      });

    return await myModalPage.present();
  }






}
