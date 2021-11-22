import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogLoginComponentComponent } from 'src/app/dialogs/dialog-login-component/dialog-login-component.component';
import { DialogMovieAddComponent } from 'src/app/dialogs/dialog-movie-add/dialog-movie-add.component';
import { Movie, MovieDtoFav } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;
  movieId!: number;
  newMovie = new MovieDtoFav();

  constructor(private route: ActivatedRoute, private movieService: MoviesService, private authService: AuthService, private dialog: MatDialog) { }

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

  addToPlayList(id: number | undefined) {
    if(this.authService.isLoggedIn()) {
      this.openMovieAddDialog(id);  
    } else {
      this.openLoginDialog();
    }
  }

  openLoginDialog() {
    this.dialog.open(DialogLoginComponentComponent, {
      width: '400px',
      disableClose: true
    });
  }
  
  onSubmit(mediaId: number) {
    if(this.authService.isLoggedIn()) {
      this.newMovie.media_id=mediaId;
      this.movieService.addToFav(this.newMovie).subscribe(res => {
        window.location.reload();
      })
  } else {
      this.openLoginDialog();
    }
    
    }
  }

