import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Objeto } from 'src/app/models/interfaces/objeto-perdido.interface';
import { ObjetoPerdidoService } from 'src/app/services/objeto-perdido.service';
import { catchError, map, of } from 'rxjs';


 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  categorias = new FormControl();
  categoria: string[] = ['Documentacion', 'Objetos personales', 'Llaves y carteras'];
  selectedId!: string;
  objetoPerdidoNuevo = new Objeto();
  objetoEncontradoNuevo = new Objeto();

  apiLoaded: Observable<boolean>;
  address: string = '';

  fundacionDonBoscoLatLng: google.maps.LatLngLiteral = {lat: 37.36133765325532, lng: -5.964321690581096};
  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };

  

  constructor(private objetoPerdidoService: ObjetoPerdidoService, private httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyByNlJfkMKkavCkpc9KMY0Wf5fASr4OOic', 'callback')
  .pipe(
    map(() => true),
    catchError(() => of(false)),
   );
}

  ngOnInit(): void {
  }

  addNewObjetoPerdido() {
    if(this.objetoPerdidoNuevo.categoria == null){
      this.objetoPerdidoNuevo.categoria = 'Sin categoria'
    }
    if(this.objetoPerdidoNuevo.nombre){
      this.objetoPerdidoService.saveObjetoPerdido(this.objetoPerdidoNuevo.nombre, this.objetoPerdidoNuevo.descripcion, this.objetoPerdidoNuevo.categoria, this.objetoPerdidoNuevo.localizacion, this.objetoPerdidoNuevo);
    }
  }

  addNewObjetoEncontrado() {
    if(this.objetoEncontradoNuevo.categoria == null){
      this.objetoEncontradoNuevo.categoria = 'Sin categoria'
    }
    if(this.objetoEncontradoNuevo.nombre){
      this.objetoPerdidoService.saveObjetoEncontrado(this.objetoEncontradoNuevo.nombre, this.objetoEncontradoNuevo.descripcion, this.objetoEncontradoNuevo.categoria, this.objetoEncontradoNuevo.localizacion, this.objetoEncontradoNuevo);
    }
  }


  searchAddress() {
    let addressSplited = this.address.split(',');
    this.fundacionDonBoscoLatLng = {lat: Number(addressSplited[0]), lng: Number(addressSplited[1])};
  }

  updateLocationMarker(event: google.maps.MapMouseEvent) {
    console.log(`${event.latLng?.lat()} , ${event.latLng?.lng()}`);
  }
}
