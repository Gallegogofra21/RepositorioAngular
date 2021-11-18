import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Lista } from 'src/app/models/interfaces/listas.interface';
import { Movie, MoviesPopularResponse, MoviesResponse } from 'src/app/models/interfaces/movies-popular.interface';
import { ListaServiceService } from 'src/app/services/lista-service.service';
import { MoviesService } from 'src/app/services/movies.service';

export interface DialogMovieData{
  movieId: number;
}

@Component({
  selector: 'app-dialog-movie-add',
  templateUrl: './dialog-movie-add.component.html',
  styleUrls: ['./dialog-movie-add.component.css']
})
export class DialogMovieAddComponent implements OnInit {
  movieResponse!: MoviesResponse;
  idLista!: number;
  lista!: Lista;
  listas!: Lista[];
  

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogMovieData, private movieService: MoviesService, private listaService: ListaServiceService) { }

  ngOnInit(): void {
    this.getMovieId();
  }

  getMovieId(){
    this.movieService.getMovie(this.data.movieId).subscribe(result => {
      this.movieResponse = result;
    })
  }

  getLista() {
    this.listaService.getLista().subscribe( result =>{
      this.lista = result.results;
      console.log(result);
    });
  }

}
