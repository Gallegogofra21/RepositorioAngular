import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GasolinaResponse, GasolineraFav, listaEESSPrecio, Provincia } from '../models/interfaces/gasolinera.interface';

const API_BASE_URL = '../assets/peticion.json';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getListGasolineras(): Observable<any>{
    return this.http.get<any>(`${API_BASE_URL}`)
  }

  parseAnyToGasolineraListResponse(jsonString: string) {
    let jsonStringReplaced = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleoA');
    jsonStringReplaced = jsonStringReplaced.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
    jsonStringReplaced = jsonStringReplaced.replace(/Dirección/gi, 'direccion');
    jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 98 E10/gi, 'precioGasolina98E10');
    jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 98 E5/gi, 'precioGasolina98E5');
    jsonStringReplaced = jsonStringReplaced.replace(/Municipio/gi, 'municipio');
    jsonStringReplaced = jsonStringReplaced.replace(/IDProvincia/gi, 'iDProvincia');
    jsonStringReplaced = jsonStringReplaced.replace(/IDEESS/gi, 'iDEESS');
    jsonStringReplaced = jsonStringReplaced.replace(/Rótulo/gi, 'rotulo');
    
    let jsonFinal: GasolinaResponse = JSON.parse(jsonStringReplaced);
    return jsonFinal.listaEESSPrecio;
  }

  getGasolinera(gasolinera: listaEESSPrecio) {
    return this.http.get<listaEESSPrecio>(`${API_BASE_URL}`);
  }

  getProvincias(): Observable<Provincia[]>{
    return this.http.get<Provincia[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/`)
  }

}
