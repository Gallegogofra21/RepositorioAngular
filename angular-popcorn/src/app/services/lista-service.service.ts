import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaResponse } from '../models/interfaces/listas.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaServiceService {

  constructor(private http: HttpClient) { }

  getLista(): Observable<ListaResponse> {
    return this.http.get<ListaResponse>(`${environment.apiBaseUrl}/account/${environment.account_id}/lists?api_key=${environment.apiKey}&language=${environment.defaultLang}&page=1&session_id=${environment.session_id}`)

    
  }
}
