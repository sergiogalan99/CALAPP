import { Component, OnInit } from '@angular/core';
import { TipoIncidencia } from 'src/app/core/model/tipoIncidencia';
import { CreateIncidenciaService } from 'src/app/services/create-incidencia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-incidencias',
  templateUrl: './all-incidencias.page.html',
  styleUrls: ['./all-incidencias.page.scss'],
})
export class AllIncidenciasPage  implements OnInit {
 
  private incidencias: Observable<TipoIncidencia[]>;
  constructor(private fbService: CreateIncidenciaService) { }

  ngOnInit(): void {
    this.incidencias = this.fbService.getIncidencias();
    
  }
}
