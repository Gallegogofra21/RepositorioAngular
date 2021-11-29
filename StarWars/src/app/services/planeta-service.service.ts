import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planeta, PlanetaResponse } from '../interfaces/planeta.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetaServiceService {

  constructor(private http: HttpClient) { }

  getPlanetas(): Observable<PlanetaResponse> {
    return this.http.get<PlanetaResponse>(`${environment.apiBaseUrl}/planets`)
  }
}
