import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lista, ListaDto, ListaResponse } from 'src/app/models/interfaces/listas.interface';
import { MoviesResponse } from 'src/app/models/interfaces/movies-popular.interface';
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
  selectedListId!: string;
  newLista = new ListaDto();
  

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
    this.movieService.addToList(this.selectedListId,this.data.movieId).subscribe(res => {
      window.location.reload();
    });
  }

  onSubmit2(){
    this.listaService.createList(this.newLista, this.data.movieId).subscribe(res => {
      this.listaService.addToList(res.list_id, this.data.movieId).subscribe(resp => {
        window.location.reload();
      });
    });
  }

}
