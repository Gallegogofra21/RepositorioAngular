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
  listaGasolineras!: listaEESSPrecio[];
  listaGasolinerasFiltradas!: listaEESSPrecio[];
  provincias!: Provincia[];
  idPovincia: string[] = [];

  precioMin : number = 0;
  precioMax : number = 2;

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
    if(this.idPovincia != [] ){
    this.listaGasolinerasFiltradas = this.listaGasolineras?.filter(p => this.idPovincia.includes(p.iDProvincia));
    console.log(this.listaGasolinerasFiltradas);
    }

    this.listaGasolinerasFiltradas = this.listaGasolinerasFiltradas?.filter(p => (Number.parseFloat(p.precioGasoleoA.replace(',', '.'))<= this.precioMax) && (Number.parseFloat(p.precioGasoleoA.replace(',', '.'))>= this.precioMin));
    this.listaGasolinerasFiltradas = this.listaGasolinerasFiltradas?.filter(p => (Number.parseFloat(p.precioGasolina98E10.replace(',', '.'))<= this.precioMax) && (Number.parseFloat(p.precioGasolina98E10.replace(',', '.'))>= this.precioMin));
    this.listaGasolinerasFiltradas = this.listaGasolinerasFiltradas?.filter(p => (Number.parseFloat(p.precioGasolina98E5.replace(',', '.'))<= this.precioMax) && (Number.parseFloat(p.precioGasolina98E5.replace(',', '.'))>= this.precioMin));
  }

  getProvincias(){
    this.gasolinaService.getProvincias().subscribe(res => {
      this.provincias = res;
    })
  }

}
