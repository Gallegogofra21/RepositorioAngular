import { Component, OnInit } from '@angular/core';
import { Gasolina } from 'src/app/interfaces/gasolina.interface';
import { GasolinaService } from 'src/app/services/gasolina.service';

@Component({
  selector: 'app-gasolina-list',
  templateUrl: './gasolina-list.component.html',
  styleUrls: ['./gasolina-list.component.css']
})
export class GasolinaListComponent implements OnInit {
  listaGasolineras: Gasolina[] = [];

  constructor(private gasolinaService: GasolinaService) { }

  ngOnInit(): void {
    this.gasolinaService.getListGasolineras().subscribe(res => {
      this.listaGasolineras=res.ListaEESSPrecio;
      let jsonString = JSON.stringify(res);
      let jsonStringReplaced = jsonString.replace(/Dirección/gi, 'direccion');
      let jsonFinal = JSON.parse(jsonStringReplaced);
      jsonStringReplaced = jsonString.replace(/Horario/gi, 'horario');
      jsonFinal = JSON.parse(jsonStringReplaced);
      jsonStringReplaced = jsonString.replace(/IDMunicipio/gi, 'iDMunicipio');
      let jsonFinal :list= JSON.parse(jsonStringReplaced);
      console.log(jsonFinal);
    });
  }

}
