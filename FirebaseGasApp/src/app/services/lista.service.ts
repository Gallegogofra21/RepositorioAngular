import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GasolineraFav, listaEESSPrecio } from '../models/interfaces/gasolinera.interface';
import { Lista } from '../models/interfaces/lista.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  listasRef!: AngularFirestoreCollection<Lista>;

  constructor(private firestore: AngularFirestore) {
    let userId = localStorage.getItem('uid');
    this.listasRef = this.firestore.collection(`users/${userId}/listas`);
    console.log(this.listasRef);
   }

  getAll(): AngularFirestoreCollection<Lista> {
    return this.listasRef;
  }

  saveList(title: string, gasolinera: listaEESSPrecio){
    let userId = localStorage.getItem('uid');
    return this.firestore.collection(`users/${userId}/listas`).doc(gasolinera.iDEESS).set({
      title: title,
      uid: localStorage.getItem('uid')
    })
  }

  addGasolineraToList(idLista: string, gasolinera: listaEESSPrecio){
    let userId = localStorage.getItem('uid');
    return this.firestore.collection(`users/${userId}/listas/${idLista}/gasolineras`).doc(gasolinera.iDEESS).set({
      id: gasolinera.iDEESS,
      direccion: gasolinera.direccion,
      rotulo: gasolinera.rotulo,
      uid: localStorage.getItem('uid')
    });
  }

  getGasolinerasFromLista(title: string): Observable<GasolineraFav[]> {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection<GasolineraFav>(`users/${userId}/listas/${title}`).valueChanges();
  }
  
  deletePlaylist(docId: string){
    let userId = localStorage.getItem('uid');
    this.firestore.collection(`users/${userId}/listas`).doc(docId).delete();
    this.firestore.collection(`users/${userId}/listas/${docId}/gasolineras`).doc(docId).delete();
  }
}
