import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioejemploService {

  constructor() { }

  getAlgo() {
    let url = `${environment.apiBaseUrl}/people/popular?api_key=${environment.apiKey}`;
  }
}
