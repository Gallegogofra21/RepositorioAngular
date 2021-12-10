import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { GasolineraDtoFav, listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { DialogGasolineraDetailComponent } from '../dialog-gasolinera-detail/dialog-gasolinera-detail.component';

const COLLECTION_FAVORITES = 'favorites';
@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolineraInput!: listaEESSPrecio;

  constructor(private dialog: MatDialog, public auth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  openDialogDetailsData() {
    this.dialog.open(DialogGasolineraDetailComponent, {
      height: '400px',
      width: '300px',
      data: { gasolinera: this.gasolineraInput}
    })
  }

  addToFav() {
    this.firestore.collection(COLLECTION_FAVORITES)
    .add({
      direccion: this.gasolineraInput.direccion,
      municipio: this.gasolineraInput.municipio,
      precioGasoleoA: this.gasolineraInput.precioGasoleoA,
      precioGasolina98E10: this.gasolineraInput.precioGasolina98E10,
      precioGasolina98E5: this.gasolineraInput.precioGasolina98E5,
      id:this.gasolineraInput.iDEESS,
      uid: localStorage.getItem('uid')});
      
  }

  deleteFav() {
    console.log(this.gasolineraInput.iDEESS);
    this.firestore.collection(COLLECTION_FAVORITES)
    .doc().delete();
  }

}
