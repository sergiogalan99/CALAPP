import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { ObservableLike, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private user: firebase.User;

  constructor(private auth: AngularFireAuth,
              public alert: AlertController,
              private firestore: AngularFirestore) {
    auth.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    console.log('Login');
    return this.auth.auth.signInWithEmailAndPassword(email,
      password);
  }

  signUp(email: string, password: string) {
    console.log('SigUp');
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    console.log('LogOut');
    return this.auth.auth.signOut();
  }

  getCurrentUserUid() {
    console.log('CurrentId');
    return this.auth.auth.currentUser.uid;
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

  searchAdmin(uid: string): Observable<any> {
    return this.firestore.collection('admins', ref => ref.where('uid', '==', uid)).get();
  }

}
