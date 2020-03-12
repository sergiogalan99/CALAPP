import { ModalImagenGrandePageModule } from './pages/modal-imagen-grande/modal-imagen-grande.module';

import { HomePage } from './pages/home/home.page';
import { Camera } from '@ionic-native/camera/ngx';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AutenticacionService } from './services/autenticacion.service';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalPageModule } from './pages/modal/modal.module';






@NgModule({

  declarations: [AppComponent],
  entryComponents: [],

  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ModalPageModule,
    ModalImagenGrandePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: Camera, useClass: Camera },
    AutenticacionService,
    AngularFireAuthModule,
    AngularFireAuth,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireStorage,
    EmailComposer,
    Geolocation,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
