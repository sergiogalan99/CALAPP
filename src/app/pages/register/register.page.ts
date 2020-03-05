import { Component, OnInit, ViewChild } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {



  loginError: string;
  email: '';
  password: '';
  passwordConf = '';
  res: string;
  public showPass = false;
  public type = 'password';

  constructor(
    private auth: AutenticacionService,
    private routesv: Router,
  ) {

  }

  signUp() {

    if (this.password == this.passwordConf) {
      this.auth.signUp(this.email, this.password)
        .then(
          () => this.routesv.navigateByUrl('/menu'),
          error => this.loginError = error.message
        );
    }else{
      this.res = 'Las contraseñas no coinciden';
    }
  }
   showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';

    } else {
      this.type = 'password';
    }
  }



}









