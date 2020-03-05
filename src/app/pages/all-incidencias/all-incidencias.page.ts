import { Component, OnInit } from '@angular/core';
import { TipoIncidencia } from 'src/app/core/model/TipoIncidencia';
import { IncidenciaService } from 'src/app/services/incidencia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-incidencias',
  templateUrl: './all-incidencias.page.html',
  styleUrls: ['./all-incidencias.page.scss'],
})
export class AllIncidenciasPage  {

  private incidencias: Array<any>;

  constructor(private incidenciaService: IncidenciaService) {
  }

  ionViewDidEnter() {
    this.incidencias = [];
    this.getAll();
  }

  getAll() {
    this.incidenciaService.getAll().subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data());
        this.incidencias.push(doc.data());
      });
    });
  }
}
