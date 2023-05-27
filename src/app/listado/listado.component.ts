import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  gatos : any = [
    {nombre: "Gato Uno", descripcion: "Hola gato uno"},
    {nombre: "Gato Dos", descripcion: "Hola gato dos"},
    {nombre: "Gato Tres", descripcion: "Hola gato tres"}
  ];

}
