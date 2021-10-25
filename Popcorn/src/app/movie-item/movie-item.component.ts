import { Component, OnInit, Input } from '@angular/core';
import { MoviesPopular } from '../interfaces/movies-lists.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() moviesInput: MoviesPopular | undefined;
  i: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getPopularMovies(url:string):string {
    let splitArray = url.split("/");
    console.log(splitArray);
    return `https://api.themoviedb.org/3/movie/popular/${splitArray[8]}`;
  }

}
