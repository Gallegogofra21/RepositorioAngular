import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesPopularResponse, MoviesResponse } from 'src/app/models/interfaces/movies-popular.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';


export interface DialogMovieDetailData {
  movieId: number;
}

@Component({
  selector: 'app-dialog-movie-detail',
  templateUrl: './dialog-movie-detail.component.html',
  styleUrls: ['./dialog-movie-detail.component.css']
})
export class DialogMovieDetailComponent implements OnInit {

  movie!: MoviesResponse;


  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogMovieDetailData, private movieService: MoviesService) { }

  ngOnInit(): void {
    console.log(this.data.movieId);
    this.movieService.getMovie(this.data.movieId).subscribe(movieResult => {
      this.movie = movieResult;
    });
  }

  getMovieImageUrl(movie: MoviesResponse) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

}
