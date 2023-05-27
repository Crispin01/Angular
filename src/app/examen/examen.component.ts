import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent {

  saludos : any = [
    {foto: "https://www.purina-latam.com/sites/default/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=SRb_m7Tx"},
  ];
  mostrarAlerta() {
    alert('Hola');
  }

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
    let pokeapi = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    this.http.get(pokeapi).subscribe(
      (data: any) => {
        console.log(data);
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
