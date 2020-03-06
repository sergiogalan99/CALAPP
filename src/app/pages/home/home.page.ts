import { AutenticacionService } from '../../services/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  loginError: string;
  email: '';
  password: '';
  constructor(
    private auth: AutenticacionService,
    private routesv: Router,
    private loadingCtrl: LoadingController,
  ) {

  }

 

  async login() {
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
      loading.dismiss();
    });

  }








}

