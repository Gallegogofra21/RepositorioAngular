import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MoviesPopularResponse } from '../interfaces/movies-lists.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }

  getAlgo() {
    let url = `${environment.apiBaseUrl}/people/popular?api_key=${environment.apiKey}`;
  }

  getMoviesList(limit: number): Observable<MoviesPopularResponse>{
    return this.http.get<MoviesPopularResponse>(`${environment.apiBaseUrl}`)
    
  }
}
