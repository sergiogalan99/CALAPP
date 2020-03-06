import { TipoIncidencia } from '../core/model/TipoIncidencia';
import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class IncidenciaService {
 
  constructor(private autentication: AutenticacionService,
              private db: AngularFirestore) {}

  add(incidencia: TipoIncidencia): Promise<any> {
    return this.db.collection('incidencias').add({
      idUser: incidencia.idUser,
      nombreTipologia: incidencia.nombreTipologia,
      fecha: incidencia.fecha,
      localizacion: incidencia.localizacion,
      descripcion: incidencia.descripcion,
    });
  }
  getAll(): Observable<any> {
    return this.db.collection('incidencias').get();
  }

  imageAdd() {

  }


}
