import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { People } from 'src/app/interfaces/personaje.interface';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.css']
})
export class PersonajeListComponent implements OnInit {
  listaPersonajes: People[] = [];
  listaPersonajesFiltrados: People[] = [];
  genderFormControl = new FormControl('');

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
    this.genderFormControl.setValue('male');
    this.personajeService.getPeople().subscribe(res => {
      this.listaPersonajes=res.results;
      this.listaPersonajesFiltrados = this.listaPersonajes;
    });
  }

  doFilter() {
    let genderSelected = this.genderFormControl.value;
    this.listaPersonajesFiltrados = this.listaPersonajes.filter(p => p.gender == genderSelected);
  }

  changeGender(e: any){
    this.genderFormControl.setValue(e.value);
  }

  getPhotoUrl(p: People){
    let personId = p.url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`;
  }
  

}
