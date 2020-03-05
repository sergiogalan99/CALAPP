import { Injectable } from '@angular/core';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { EmailValidator } from '@angular/forms';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private user: firebase.User;

  constructor(private firebase: AngularFireAuth, public alert: AlertController) {
    firebase.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithEmail(email: string, password: string) {
    console.log('Login');
    return this.firebase.auth.signInWithEmailAndPassword(email,
      password);
  }

  signUp(email: string, password: string) {
    console.log('SigUp');
    return this.firebase.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    console.log('LogOut');
    return this.firebase.auth.signOut();
  }

  getCurrentUserUid() {
    console.log('CurrentId');
    return this.firebase.auth.currentUser.uid;
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['OK'],
      cssClass: 'alertDanger'
    });
    await alert.present();
  }






}
