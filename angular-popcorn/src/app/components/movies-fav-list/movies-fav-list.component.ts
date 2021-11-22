import { Component, Input, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/interfaces/listas.interface';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ListaServiceService } from 'src/app/services/lista-service.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-fav-list',
  templateUrl: './movies-fav-list.component.html',
  styleUrls: ['./movies-fav-list.component.css']
})
export class MoviesFavListComponent implements OnInit {

  favoriteMovies: Movie[] = [];

  constructor(private movieService: MoviesService,
    private authService: AuthService) { }

  ngOnInit(): void {
    
      this.movieService.getFavoritesMovies().subscribe(res => {
        this.favoriteMovies=res.results;
      })  
    }

}
