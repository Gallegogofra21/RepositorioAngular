import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { listaEESSPrecio } from 'src/app/models/interfaces/gasolinera.interface';
import { Lista } from 'src/app/models/interfaces/lista.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { ListaService } from 'src/app/services/lista.service';
import { map } from 'rxjs';

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
  listas!: Lista[];
  listaNueva = new Lista();

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogGasolineraData, private gasolineraService: GasolineraService, private listaService: ListaService) { }

  ngOnInit(): void {

    this.getAllLists();
  }

  getGasolineraId() {
    this.gasolineraService.getGasolinera(this.data.gasolinera).subscribe(result => {
      this.gasolineraResponse = result;
    })
  }

  addGasolineraToList() {
    this.listaService.addGasolineraToList(this.selectedListId, this.data.gasolinera);
  }

  addNewList() {
    if(this.listaNueva.title){
    this.listaService.saveList(this.listaNueva?.title, this.data.gasolinera);
    this.listaService.addGasolineraToList(this.data.gasolinera.iDEESS, this.data.gasolinera);
    }
  }


  getAllLists(): void {
    this.listaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.listas = data;
    });
  }
}
