import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolinaResponse } from '../interfaces/gasolina.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolinaService {

  constructor(private http: HttpClient) { }

  getListGasolineras(): Observable<any>{
    return this.http.get<any>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/`)
  }

  parseAnyToGasolineraListResponse(jsonString: string) {
    let jsonStringReplaced = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleA');
    jsonStringReplaced = jsonStringReplaced.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
    let jsonFinal: GasolinaResponse = JSON.parse(jsonStringReplaced);
    return jsonFinal.listaEESSPrecio;
  }
}
