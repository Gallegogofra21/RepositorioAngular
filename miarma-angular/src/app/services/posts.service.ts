import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, PostResponse } from '../models/post-interface';
import { AuthService } from './auth.service';

const postUrl = `${environment.apiBaseUrl}/post`
const token = localStorage.getItem('request_token');

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${token}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getPublicPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>('http://localhost:8080/post/public', DEFAULT_HEADERS);
  }
}
