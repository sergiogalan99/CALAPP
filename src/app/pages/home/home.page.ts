import { AutenticacionService } from '../../services/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  res: string;
  email: '';
  password: '';
  constructor(
    private auth: AutenticacionService,
    private routesv: Router,
    private loadingCtrl: LoadingController,
  ) {

  }



  async login() {
    if (this.email.length > 0 && this.password.length > 0) {
      const loading = await this.loadingCtrl.create();
      loading.present();
      this.auth.login(this.email, this.password).then(() => {
        this.auth.searchAdmin(this.auth.getCurrentUserUid()).subscribe(data => {
          if (data.empty) {
            this.routesv.navigateByUrl('/menu');
          } else {
            this.routesv.navigateByUrl('/all-incidencias');
          }
        });
      }).catch(() => {
        this.res = 'Campos erroneos';
      });
      loading.dismiss();
    } else {
      this.res = 'Campos vacios';
    }
  }








}

