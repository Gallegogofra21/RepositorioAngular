import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GasolineraDtoFav, listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';

const COLLECTION_FAVORITES = 'favorites';

@Component({
  selector: 'app-gasolinera-fav-list',
  templateUrl: './gasolinera-fav-list.component.html',
  styleUrls: ['./gasolinera-fav-list.component.css']
})
export class GasolineraFavListComponent implements OnInit {

  favList!: Observable<listaEESSPrecio[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(){
    this.favList = this.firestore.collection<listaEESSPrecio>(COLLECTION_FAVORITES).valueChanges();
  }

}
