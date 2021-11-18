import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogMovieAddComponent } from 'src/app/dialogs/dialog-movie-add/dialog-movie-add.component';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

  constructor(private route: ActivatedRoute, private movieService: MoviesService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

  openMovieAddDialog(id: number | undefined) {
    this.dialog.open(DialogMovieAddComponent, {
      height: '600px',
      width: '800px',
      data: { movieId: this.movieInput?.id }
    });
  }

}
