import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMovieDetailComponent } from 'src/app/dialog/dialog-movie-detail/dialog-movie-detail.component';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;
  i: number = 0;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

  openMovieDetailDialog(){
    this.dialog.open(DialogMovieDetailComponent, {
      height: '600px',
      width: '800px',
      data: { movieId: this.movieInput?.id }
    });
  }

}
