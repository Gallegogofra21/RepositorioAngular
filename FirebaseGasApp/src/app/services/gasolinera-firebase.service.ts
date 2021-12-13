import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GasolineraFav, listaEESSPrecio } from '../models/interfaces/gasolinera.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolineraFirebaseService {

  constructor(private firestore: AngularFirestore) { }

  addFavorite(gasolinera: listaEESSPrecio) {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection(`users/${userId}/favorites`).doc(gasolinera.iDEESS).set({
      id: gasolinera.iDEESS,
      direccion: gasolinera.direccion,
      rotulo: gasolinera.rotulo,
      uid: localStorage.getItem('uid')
    });
  }

  getFavorites(): Observable<GasolineraFav[]> {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection<GasolineraFav>(`users/${userId}/favorites`).valueChanges();
  }

  deleteFavorite(docId: string) {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection(`users/${userId}/favorites`).doc(docId).delete();
  }
}
