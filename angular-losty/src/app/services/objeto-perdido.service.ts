import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Categoria } from '../models/interfaces/categoria.interface';
import { ObjetoPerdidoDto } from '../models/interfaces/objeto-perdido.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjetoPerdidoService {

  listasRef!: AngularFirestoreCollection<ObjetoPerdidoDto>;

  constructor(private firestore: AngularFirestore) {
    let userId = localStorage.getItem('uid');
    this.listasRef = this.firestore.collection(`users/${userId}/objetosPerdidos`);
    console.log(this.listasRef);
   }

   saveObjeto(name: string, descripcion: string, categoria: Categoria, localizacion: string, objeto: ObjetoPerdidoDto){
     let userId = localStorage.getItem('uid');
     return this.firestore.collection(`users/${userId}/objetosPerdidos`).doc(objeto.id).set({
       name: name,
       descripcion: descripcion,
       categoria: categoria,
       localizacion: localizacion,
       uid: localStorage.getItem('uid')
     })
   }
}
