import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { listaEESSPrecio, Provincia } from 'src/app/interfaces/gasolina.interface';
import { GasolinaService } from 'src/app/services/gasolina.service';

@Component({
  selector: 'app-gasolina-list',
  templateUrl: './gasolina-list.component.html',
  styleUrls: ['./gasolina-list.component.css']
})
export class GasolinaListComponent implements OnInit {
  listaGasolineras: listaEESSPrecio[] = [];
  listaGasolinerasFiltradas: listaEESSPrecio[] = [];
  provincias!: Provincia[];
  idProvincia: String[] = [];

  constructor(private gasolinaService: GasolinaService) { }

  ngOnInit(): void {
    this.gasolinaService.getListGasolineras().subscribe(res => {
      this.getProvincias();
      this.doFilter();
      this.listaGasolineras = this.gasolinaService.parseAnyToGasolineraListResponse(JSON.stringify(res));
      this.listaGasolinerasFiltradas = this.listaGasolineras;
      console.log(this.listaGasolineras);
    });
  }

  doFilter(){
    this.listaGasolinerasFiltradas = this.listaGasolineras;
    if(this.idProvincia !=[] ){
    this.listaGasolinerasFiltradas = this.listaGasolineras?.filter(p => this.idProvincia.includes(p.iDProvincia));
    console.log(this.listaGasolinerasFiltradas);
    }
  }

  getProvincias(){
    this.gasolinaService.getProvincias().subscribe(res => {
      this.provincias = res;
    })
  }

}
