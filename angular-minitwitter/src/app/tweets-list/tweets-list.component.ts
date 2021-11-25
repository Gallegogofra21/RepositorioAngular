import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/interfaces/tweet.interface';
import { AuthService } from '../services/auth.service';
import { TweetsService } from '../services/tweets.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {


  listaTweets: Tweet[] = [];
  constructor(private tweetService:TweetsService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.tweetService.getTweets().subscribe(res =>{
      this.listaTweets = res.result;
    })

  }

}
