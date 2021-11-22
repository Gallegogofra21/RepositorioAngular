import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/interfaces/listas.interface';
import { ListaServiceService } from 'src/app/services/lista-service.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  Lists!: Lista[];


  constructor(private listaService: ListaServiceService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listaService.getLista().subscribe(res => {
      this.Lists = res.results;
      console.log(res);
    })
  }

}
