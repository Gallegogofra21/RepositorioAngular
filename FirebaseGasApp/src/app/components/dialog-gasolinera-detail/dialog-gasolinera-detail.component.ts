import { Component, Inject, OnInit } from '@angular/core';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    private gasolineraService: GasolineraService
  ) { }

  ngOnInit(): void {
    
    
  }

}
