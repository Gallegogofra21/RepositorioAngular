import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { listaEESSPrecio } from 'src/app/interfaces/gasolina.interface';
import { GasolinaService } from 'src/app/services/gasolina.service';

export interface DialogGasolineraDetailData{
  gasolinera: listaEESSPrecio;
}
@Component({
  selector: 'app-dialog-gasolinera-detail',
  templateUrl: './dialog-gasolinera-detail.component.html',
  styleUrls: ['./dialog-gasolinera-detail.component.css']
})
export class DialogGasolineraDetailComponent implements OnInit {
  gasolinera: listaEESSPrecio = this.data.gasolinera;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogGasolineraDetailData,
    private gasolineraService: GasolinaService
  ) { }

  ngOnInit(): void {
    
    
  }

}
