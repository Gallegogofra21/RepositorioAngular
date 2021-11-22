import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista, ListaDto, ListaDtoResponse, ListaResponse } from '../models/interfaces/listas.interface';


const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ListaServiceService {

  newLista!: ListaDto;

  constructor(private http: HttpClient) { }

  getLista(): Observable<ListaResponse> {
    return this.http.get<ListaResponse>(`${environment.apiBaseUrl}/account/${environment.account_id}/lists?api_key=${environment.apiKey}&language=${environment.defaultLang}&page=1&session_id=${localStorage.getItem('session_id')}`)
  }

  addToList(idLista: number, idMovie: number) {
    return this.http.post<Lista>(`${environment.apiBaseUrl}/list/${idLista}/add_item?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {media_id: idMovie})
  }

  createList(newLista: ListaDto, idMovie: number): Observable<ListaDtoResponse> {
    return this.http.post<ListaDtoResponse>(`${environment.apiBaseUrl}/list?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, newLista, DEFAULT_HEADERS )
  }
}
