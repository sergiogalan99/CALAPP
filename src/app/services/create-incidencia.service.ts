
import { AutenticacionService } from './autenticacion.service';
import { TipoIncidencia } from './../core/model/tipoIncidencia';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CreateIncidenciaService {

  private incidencias: Observable<TipoIncidencia[]>
  private incidenciasCollection: AngularFirestoreCollection<TipoIncidencia>
  private test: TipoIncidencia[];
  constructor(private afStoreSv: AngularFirestore, private autentication: AutenticacionService) {
  
    this.incidenciasCollection = this.afStoreSv.collection<TipoIncidencia>('users/' + this.autentication.getCurrentUserUid() + '/incidencias');
    this.incidencias = this.incidenciasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.incidencias.subscribe(data => { this.test = data });
    console.log(this.test);
  }

  addIncidencia(incidencia: TipoIncidencia): Promise<DocumentReference> {
    return this.incidenciasCollection.add(incidencia);
  }

  getIncidencia(id: string): Observable<TipoIncidencia> {
    return this.incidenciasCollection.doc<TipoIncidencia>(id).valueChanges().pipe(
      take(1),
      map(incidencias => {
        incidencias.id = id;
        return incidencias;
      })
    );
  }
  getIncidencias(): Observable<TipoIncidencia[]> {
    return this.incidencias;
  }

}
