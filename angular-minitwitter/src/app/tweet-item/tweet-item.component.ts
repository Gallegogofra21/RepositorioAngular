import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../models/interfaces/tweet.interface';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.css']
})
export class TweetItemComponent implements OnInit {

  @Input() tweetInput!: Tweet;
  constructor() { }

  ngOnInit(): void {
  }

}
