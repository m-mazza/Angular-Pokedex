import { Component } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  nameFilter ='';
  selectedPkm: {name: string, number: number} | null = null;

  get pokemonList() {
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.toLocaleLowerCase().indexOf(this.nameFilter) !== -1;
    })
  }

  constructor(private pokeapi: PokeapiService) {

  }

  get pkmSprite() {
    if(this.selectedPkm !== null){
      const number = ('000' + this.selectedPkm.number).slice(-3);
      return `https://serebii.net/sunmoon/pokemon/${number}.png`;
    }
    return '';
  }

  selectPokemon(pkm: any) {
    this.selectedPkm =  pkm;
  }
}


