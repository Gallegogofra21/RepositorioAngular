import { Component, Input, OnInit } from '@angular/core';
import { Gasolina } from 'src/app/interfaces/gasolina.interface';

@Component({
  selector: 'app-gasolina-item',
  templateUrl: './gasolina-item.component.html',
  styleUrls: ['./gasolina-item.component.css']
})
export class GasolinaItemComponent implements OnInit {
  @Input() gasolineraInput!: Gasolina;

  constructor() { }

  ngOnInit(): void {
  }

}
