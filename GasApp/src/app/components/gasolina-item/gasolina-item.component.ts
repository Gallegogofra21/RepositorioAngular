import { Component, Input, OnInit } from '@angular/core';
import { listaEESSPrecio } from 'src/app/interfaces/gasolina.interface';


@Component({
  selector: 'app-gasolina-item',
  templateUrl: './gasolina-item.component.html',
  styleUrls: ['./gasolina-item.component.css']
})
export class GasolinaItemComponent implements OnInit {
  @Input() gasolineraInput!: listaEESSPrecio;

  constructor() { }

  ngOnInit(): void {
  }

}
