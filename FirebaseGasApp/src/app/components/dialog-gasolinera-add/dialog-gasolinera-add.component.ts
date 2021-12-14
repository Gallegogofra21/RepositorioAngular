import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { ListaService } from 'src/app/services/lista.service';

export interface DialogGasolineraData{
  gasolinera: listaEESSPrecio;
}

@Component({
  selector: 'app-dialog-gasolinera-add',
  templateUrl: './dialog-gasolinera-add.component.html',
  styleUrls: ['./dialog-gasolinera-add.component.css']
})
export class DialogGasolineraAddComponent implements OnInit {

  gasolineraResponse!: listaEESSPrecio;
  selectedListId!: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogGasolineraData, private gasolineraService: GasolineraService, private listaService: ListaService) { }

  ngOnInit(): void {
    this.gasolineraService.getListGasolineras().subscribe(res => {
      
    })
  }

  getGasolineraId() {
    this.gasolineraService.getGasolinera(this.data.gasolinera).subscribe(result => {
      this.gasolineraResponse = result;
    })
  }

  getLista() {
    this.listaService.getAll();
  }

  onSubmit() {
    this.listaService.addGasolineraToList(this.selectedListId, this.data.gasolinera)
  }

}
