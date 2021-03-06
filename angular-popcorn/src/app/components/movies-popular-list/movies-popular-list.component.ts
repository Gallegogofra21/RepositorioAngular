import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Genre, Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})


export class MoviesPopularListComponent implements OnInit {
  popularMovies: Movie[] = [];
  generos = new FormControl();
  listaGeneros!: Genre[];
  idGenero!: number;

  moviesFilter: Movie[] | undefined;

  constructor(private moviesService: MoviesService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    
    this.moviesService.getPopularMovies().subscribe(popularMoviesResponse => {
      this.popularMovies = popularMoviesResponse.results;
      this.moviesFilter = popularMoviesResponse.results;
    });

    this.getGeneros();
  }

  getGeneros() {
    this.moviesService.getGenres().subscribe(result => {
      this.listaGeneros = result.genres;
    });
  }

  filterMovies() {
    this.moviesFilter = this.popularMovies;
    this.moviesFilter = this.popularMovies?.filter(movie => movie.genre_ids.includes(this.idGenero));
    console.log(this.idGenero);
  }

  onSubmit() {
    this.filterMovies();
  }
}
