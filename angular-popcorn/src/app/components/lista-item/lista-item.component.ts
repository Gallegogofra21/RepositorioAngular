import { Component, Input, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/interfaces/listas.interface';
import { ListaServiceService } from 'src/app/services/lista-service.service';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})
export class ListaItemComponent implements OnInit {

  @Input() listaInput!: Lista;

  constructor(private listaService: ListaServiceService) { }

  ngOnInit(): void {
  }

}
