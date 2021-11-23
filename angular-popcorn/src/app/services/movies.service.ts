import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreResponse } from '../models/interfaces/generos.interface';
import { Lista } from '../models/interfaces/listas.interface';
import { Movie, MovieDtoFav, MovieDtoResponse, MoviesPopularResponse, MoviesResponse } from '../models/interfaces/movies-popular.interface';

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

  newMovie!: MovieDtoFav;


  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<MoviesPopularResponse> {
    return this.http.get<MoviesPopularResponse>(`${movieUrl}/popular?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }

  getMovie(id: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${environment.apiBaseUrl}/movie/${id}?api_key=${environment.apiKey}&language=${environment.defaultLang}`)
  }

  addToList(selectedListId: string, idMovie: number) {
    return this.http.post<Lista>(`${environment.apiBaseUrl}/list/${selectedListId}/add_item?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, {media_id: idMovie})
  }

  addToFav(newMovie: MovieDtoFav): Observable<MovieDtoResponse> {
    return this.http.post<MovieDtoResponse>(`${environment.apiBaseUrl}/account/${environment.account_id}/favorite?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`, newMovie, DEFAULT_HEADERS)
  }

  getFavoritesMovies(): Observable<MoviesPopularResponse> {
    return this.http.get<MoviesPopularResponse>(`${environment.apiBaseUrl}/account/${environment.account_id}/favorite/movies?api_key=${environment.apiKey}&language=${environment.defaultLang}&sort_by=created_at.asc&page=1&session_id=${localStorage.getItem('session_id')}`)
  }

  getGenres(): Observable<GenreResponse>{
    return this.http.get<GenreResponse>(`${environment.apiBaseUrl}/genre/movie/list?api_key=${environment.apiKey}&language=${environment.defaultLang}`)
  }

}
