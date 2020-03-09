import { TipoIncidencia } from '../core/model/TipoIncidencia';
import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})

export class IncidenciaService {
 
  constructor(private autentication: AutenticacionService,
              private db: AngularFirestore,
              private storage: AngularFireStorage) {}

  add(incidencia: TipoIncidencia): Promise<any> {
    return this.db.collection('incidencias').add({
      idUser: incidencia.idUser,
      nombreTipologia: incidencia.nombreTipologia,
      fecha: incidencia.fecha,
      descripcion: incidencia.descripcion,
    });
  }
  getAll(): Observable<any> {
    return this.db.collection('incidencias').get();
  }

  getImage(imageName: string) {
    const storage = this.storage.storage;

    const storageRef = storage.ref('incidencias/' + imageName);

    return storageRef.getDownloadURL();
  }
  delete(id: string): Promise<any> {
    return this.db.collection('incidencias').doc(id).delete();
  }

  

}
