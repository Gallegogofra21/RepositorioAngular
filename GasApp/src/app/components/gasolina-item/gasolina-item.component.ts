import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { listaEESSPrecio } from 'src/app/interfaces/gasolina.interface';
import { DialogGasolineraDetailComponent } from '../dialog-gasolinera-detail/dialog-gasolinera-detail.component';


@Component({
  selector: 'app-gasolina-item',
  templateUrl: './gasolina-item.component.html',
  styleUrls: ['./gasolina-item.component.css']
})
export class GasolinaItemComponent implements OnInit {
  @Input() gasolineraInput!: listaEESSPrecio;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogDetailsData() {
    this.dialog.open(DialogGasolineraDetailComponent, {
      height: '400px',
      width: '300px',
      data: { gasolinera: this.gasolineraInput}
    })
  }

}
