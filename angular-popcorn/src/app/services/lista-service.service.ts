import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista, ListaResponse } from '../models/interfaces/listas.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaServiceService {

  constructor(private http: HttpClient) { }

  getLista(id: number): Observable<Lista[]> {
    return this.http.get<Lista[]>(`${environment.apiBaseUrl}/list/${id}?api_key=${environment.apiKey}&language=${environment.defaultLang}`)
  }
}
