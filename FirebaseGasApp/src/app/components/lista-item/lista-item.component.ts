import { Component, Input, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/interfaces/lista.interface';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})
export class ListaItemComponent implements OnInit {

  @Input() listaInput!: Lista;

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
  }

  deletePlaylist(lista: Lista){
    let idLista:string = `${lista.id}`;
    this.listaService.deletePlaylist(idLista);

  }

}
