import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Planeta, PlanetaDetailsResponse } from 'src/app/interfaces/planeta.interface';
import { PlanetaServiceService } from 'src/app/services/planeta-service.service';

@Component({
  selector: 'app-planeta-item',
  templateUrl: './planeta-item.component.html',
  styleUrls: ['./planeta-item.component.css']
})
export class PlanetaItemComponent implements OnInit {

  @Input() planetaInput!: Planeta;

  planetaDetailResponse!: PlanetaDetailsResponse;
  idPlaneta="";

  constructor(private planetaService: PlanetaServiceService, private http: HttpClient) { }

  ngOnInit(): void {
  }

}
