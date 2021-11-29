import { Component, OnInit } from '@angular/core';
import { Planeta } from 'src/app/interfaces/planeta.interface';
import { PlanetaServiceService } from 'src/app/services/planeta-service.service';

@Component({
  selector: 'app-planeta-list',
  templateUrl: './planeta-list.component.html',
  styleUrls: ['./planeta-list.component.css']
})
export class PlanetaListComponent implements OnInit {

  planetaList!: Planeta[];

  constructor(private planetaService: PlanetaServiceService) { }

  ngOnInit(): void {
    this.getPlanetas()
  }

  getPlanetas(){
    this.planetaService.getPlanetas().subscribe(res => {
      this.planetaList=res.results;
      console.log(this.planetaList);
    })
  }

}
