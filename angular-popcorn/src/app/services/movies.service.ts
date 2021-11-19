import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista } from '../models/interfaces/listas.interface';
import { Movie, MoviesPopularResponse, MoviesResponse } from '../models/interfaces/movies-popular.interface';

const movieUrl = `${environment.apiBaseUrl}/movie`;

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class MoviesService {


  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<MoviesPopularResponse> {
    return this.http.get<MoviesPopularResponse>(`${movieUrl}/popular?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }

  getMovie(id: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${environment.apiBaseUrl}/movie/${id}?api_key=${environment.apiKey}&language=${environment.defaultLang}`)
  }

  addToList(idLista: number, idMovie: number) {
    return this.http.post<Lista>(`${environment.apiBaseUrl}/list/${idLista}/add_item?api_key=${environment.apiKey}&session_id=${environment.session_id}`, {media_id: idMovie})
  }

}
