import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonListResponse } from '../interfaces/pokemon-list.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;
  pokemonName = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons(50);
  }

  getPokemons(pokemonLimit: number) {
    this.pokemonService.getPokemonList(pokemonLimit).subscribe( resultado => {
      this.pokemonList = resultado.results;
      console.log(resultado);
    });
  }

  getPokemonList() {
    this.pokemonService.getPokemonList(parseInt(this.pokemonName)).subscribe( resultado => {
      this.pokemonList = resultado.results;
      console.log(resultado);
    });
  }

}
