import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { GasolineraFirebaseService } from 'src/app/services/gasolinera-firebase.service';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { DialogGasolineraAddComponent } from '../dialog-gasolinera-add/dialog-gasolinera-add.component';
import { DialogGasolineraDetailComponent } from '../dialog-gasolinera-detail/dialog-gasolinera-detail.component';

const COLLECTION_FAVORITES = 'favorites';
@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolineraInput!: listaEESSPrecio;

  constructor(private dialog: MatDialog, public auth: AngularFireAuth, private firestore: AngularFirestore, private gasolinera: GasolineraService, private gasolineraFirebase: GasolineraFirebaseService) { }

  ngOnInit(): void {
    console.log(this.gasolinera);
  }

  openDialogDetailsData() {
    this.dialog.open(DialogGasolineraDetailComponent, {
      height: '400px',
      width: '300px',
      data: { gasolinera: this.gasolineraInput}
    })
  }

  openDialogAddToList() {
    this.dialog.open(DialogGasolineraAddComponent, {
      height: '400px',
      width: '300px',
      data: { gasolinera: this.gasolineraInput}
    })
  }

  addFavorito() {
    this.gasolineraFirebase.addFavorite(this.gasolineraInput).then(res => {

    });
  }

  

}
