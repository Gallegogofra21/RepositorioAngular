import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Objeto } from '../models/interfaces/objeto-perdido.interface';



@Injectable({
  providedIn: 'root'
})
export class ObjetoPerdidoService {

  listasRef!: AngularFirestoreCollection<Objeto>;

  constructor(private firestore: AngularFirestore) {
    let userId = localStorage.getItem('uid');
    this.listasRef = this.firestore.collection(`objetosPerdidos`);
    console.log(this.listasRef);
   }

   saveObjetoPerdido(name: string, descripcion: string, categoria: string, localizacion: string, objeto: Objeto){
     let userId = localStorage.getItem('uid');
     return this.firestore.collection(`objetosPerdidos`).doc(objeto?.nombre).set({ 
      nombre: name,
      descripcion: descripcion,
      categoria: categoria,
      localizacion: localizacion
     });
   }

   saveObjetoEncontrado(name: string, descripcion: string, categoria: string, localizacion: string, objeto: Objeto){
    let userId = localStorage.getItem('uid');
    return this.firestore.collection(`objetosEncontrados`).doc(objeto?.nombre).set({ 
     nombre: name,
     descripcion: descripcion,
     categoria: categoria,
     localizacion: localizacion
    });
  }
}
