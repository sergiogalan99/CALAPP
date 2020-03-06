import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';
import { LoadingController } from '@ionic/angular';


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

  constructor(private autenticacion: AutenticacionService,
              private routesv: Router,
              private loadingCtrl: LoadingController) { }


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




}
