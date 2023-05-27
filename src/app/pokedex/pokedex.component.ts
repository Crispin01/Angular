import { Component } from '@angular/core';
// Importamos el módulo que permitirá hacer consultas
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {

  imagen : string = '';
  altura : string = '';
  habilidad : string = '';
  movimiento : string = '';
  peso : string = '';
  nombre : string = '';
  pokemones : any =[];

  constructor (private http : HttpClient) {
    let listado = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    this.http.get(listado).subscribe(
      (data: any) => {
        console.log(data);
        this.pokemones = data.results;
      }
    )
  }

  buscar() {
    let pokeapi = 'https://pokeapi.co/api/v2/pokemon/'+this.nombre;

    this.http.get(pokeapi).subscribe(
      (data: any) => {
        console.log(data);
        this.imagen = data.sprites.front_default;
        this.altura = data.height;
        this.peso = data.weight
        this.habilidad = data.abilities[0].ability.name;
        this.movimiento = data.moves[0].move.name;
      }
    )
  }
  abrir(nombre: string) {
    this.nombre = nombre;
    this.buscar();
  }

}
