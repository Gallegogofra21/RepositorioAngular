import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { DialogGasolineraDetailComponent } from '../dialog-gasolinera-detail/dialog-gasolinera-detail.component';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

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
