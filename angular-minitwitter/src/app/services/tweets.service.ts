import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tweet } from '../models/interfaces/tweet.interface';



@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  newTweet!: Tweet;

  constructor(private http : HttpClient) { }

  getTweets(): Observable<Tweet[]> {
    const TOKEN_HEADERS = {
      headers: new HttpHeaders({
        'Authentication Bearer': localStorage.getItem('token')!
      })
    };
    return this.http.get<Tweet[]>(`${environment.apiBaseUrl}/tweets/all`, TOKEN_HEADERS);
  }
}
