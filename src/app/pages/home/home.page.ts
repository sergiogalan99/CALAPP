import { AutenticacionService } from '../../services/autenticacion.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginError: string;
  email: '';
  password: '';
  constructor(
    private auth: AutenticacionService,
    private routesv: Router,
  ) {

  }

  login() {

    this.auth.signInWithEmail(this.email, this.password)
      .then(() => this.routesv.navigateByUrl('/menu'),
    
        error => this.loginError = error.message
      );
  }


 





}

