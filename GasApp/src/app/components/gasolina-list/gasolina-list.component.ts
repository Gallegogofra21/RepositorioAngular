import { Component, OnInit } from '@angular/core';
import { listaEESSPrecio } from 'src/app/interfaces/gasolina.interface';
import { GasolinaService } from 'src/app/services/gasolina.service';

@Component({
  selector: 'app-gasolina-list',
  templateUrl: './gasolina-list.component.html',
  styleUrls: ['./gasolina-list.component.css']
})
export class GasolinaListComponent implements OnInit {
  listaGasolineras: listaEESSPrecio[] = [];

  constructor(private gasolinaService: GasolinaService) { }

  ngOnInit(): void {
    this.gasolinaService.getListGasolineras().subscribe(res => {
      this.listaGasolineras = this.gasolinaService.parseAnyToGasolineraListResponse(res);
      console.log(this.listaGasolineras);
    });
  }

}
