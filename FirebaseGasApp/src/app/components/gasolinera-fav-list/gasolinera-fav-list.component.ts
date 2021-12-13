import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GasolineraFav, listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { GasolineraFirebaseService } from 'src/app/services/gasolinera-firebase.service';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-fav-list',
  templateUrl: './gasolinera-fav-list.component.html',
  styleUrls: ['./gasolinera-fav-list.component.css']
})
export class GasolineraFavListComponent implements OnInit {

  gasolineraFavList: GasolineraFav[] = [];

  constructor(private gasolineraService: GasolineraFirebaseService) { }

  ngOnInit(): void {
    this.gasolineraService.getFavorites().subscribe(res => {
      this.gasolineraFavList = res;
    })
  }

  deleteFavorito(gasolinera: GasolineraFav) {
    this.gasolineraService.deleteFavorite(gasolinera.id).then(res => {
      alert(`Eliminada la gasolinera ${gasolinera.rotulo}`)
    })
  }

}
