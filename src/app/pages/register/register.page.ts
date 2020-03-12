import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {



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
    private loadingCtrl: LoadingController,
    private emailComposer: EmailComposer
  ) {

  }


  async signUp() {

    if (this.password == this.passwordConf) {
      const loading = await this.loadingCtrl.create();
      loading.present();
      this.auth.signUp(this.email, this.password).then(() => {
        this.enviarCorreo();
        this.routesv.navigateByUrl('/menu');
      }), error => this.loginError = error.message;
      loading.dismiss();
    } else {
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

    enviarCorreo(): boolean {
    this.emailComposer
    .isAvailable()
    .then((available: boolean) => {
      if (available) {
        const email = {
          to: 'sergionetflix2015calamonte@gmail.com',
          subject: 'Hola',
          body: 'Nueva incidencia en el pueblo',
          attachments: [
          ],
          isHtml: true
        };
        this.emailComposer.open(email);
        return true;
      }
    })
    .catch(() => {
      return false;
    });
    return null;
  }



}









