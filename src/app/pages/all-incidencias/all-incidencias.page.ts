import { Component, OnInit } from '@angular/core';
import { TipoIncidencia } from 'src/app/core/model/TipoIncidencia';
import { IncidenciaService } from 'src/app/services/incidencia.service';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-incidencias',
  templateUrl: './all-incidencias.page.html',
  styleUrls: ['./all-incidencias.page.scss'],
})
export class AllIncidenciasPage  {
res: string;
  private incidencias: Array<any>;

  constructor(private incidenciaService: IncidenciaService,
              private loadingCtrl: LoadingController,
              private autenticacion: AutenticacionService,
              private router: Router) {
  }

  ionViewDidEnter() {
    this.incidencias = [];
    this.getAll();
  }

  async getAll() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.incidenciaService.getAll().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        const incidencia = doc.data(); 
        this.incidenciaService.getImage(doc.id).then(imageURL => {
          this.incidencias.push({image: imageURL, data: incidencia});
        });
      });
      loading.dismiss();
    });
  }
  async logout() {
    const loading = await this.loadingCtrl.create();
    loading.present();
     this.autenticacion.logout().then(_data => {
        loading.dismiss();
       this.router.navigateByUrl('/home');
     }).catch(_data => {
       this.res = 'Error al cerrar sesión';
     });

}


}
