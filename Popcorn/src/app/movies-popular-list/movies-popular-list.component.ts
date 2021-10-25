import { Component, OnInit } from '@angular/core';
import { MoviesPopular } from '../interfaces/movies-lists.interface';
import { MoviesServiceService } from '../services/movies-service.service';

@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {

  movieList: MoviesPopular[] | undefined;
  moviesNumberSelected = '50';

  constructor(private moviesService: MoviesServiceService) { }

  ngOnInit(): void {
    this.getMovies(100);
  }

  getMovies(moviesLimit: number) {
    this.moviesService.getMoviesList(moviesLimit).subscribe( resultado => {
      this.movieList = resultado.results;
      console.log(resultado)
    });
  }

  getMoviesList() {
    this.moviesService.getMoviesList(parseInt(this.moviesNumberSelected)).subscribe( resultado => {
      this.movieList = resultado.results;
      console.log(resultado);
    });
  }

  

}
