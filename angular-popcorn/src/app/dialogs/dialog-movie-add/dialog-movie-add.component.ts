import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Lista, ListaResponse } from 'src/app/models/interfaces/listas.interface';
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
  lista!: ListaResponse;
  listas!: Lista[];
  

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogMovieData, private movieService: MoviesService, private listaService: ListaServiceService) { }

  ngOnInit(): void {
    this.getMovieId();
    this.getLista();
  }

  getMovieId(){
    this.movieService.getMovie(this.data.movieId).subscribe(result => {
      this.movieResponse = result;
    })
  }

  getLista() {
    this.listaService.getLista().subscribe( result =>{
      this.listas = result.results;
      console.log(result);
    });
  }

  onSubmit() {
    this.movieService.addToList(this.idLista,this.data.movieId).subscribe(res => {

    });
  }

}
