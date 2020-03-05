import { Puestotrabajo } from '../core/model/PuestoTrabajo';
import { AutenticacionService } from './autenticacion.service';
import { Injectable, Query } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PuestoTrabajoService {

  constructor(private afStoreSv: AngularFirestore, private autentication: AutenticacionService, private db: AngularFirestore) { }

  add(puesto: Puestotrabajo): Promise<any> {
    return this.db.collection('puestos').add({
      idUser: puesto.idUser,
      profesion: puesto.profesion,
      caracteristicas: puesto.caracteristicas,
      salario: puesto.salario,
      email: puesto.email,
      telefono: puesto.telefono,
      trabajadores: puesto.trabajadores
    });
  }

  getAll(): Observable<any> {
    return this.db.collection('puestos').get();
  }

  getAllCurrentUser(): Observable<any> {
    return this.db.collection('puestos', ref => ref.where('idUser', '==', this.autentication.getCurrentUserUid())).get();
  }

  delete(id: string): Promise<any> {
    return this.db.collection('puestos').doc(id).delete();
  }
}
