import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
    
}

// clientes : any = [];
//     trabajadores : any = [];

//     constructor(private http: HttpClient){
//       let clientes_url = 'http://localhost:8000/api/clientes';

//       this.http.get(clientes_url).subscribe((data) => {
//         console.log('clientes', data);
//         this.clientes = data;
//       })

//       let trabajadores_url = 'http://localhost:8000/api/trabajadores';

//       this.http.get(trabajadores_url).subscribe((data) => {
//         console.log('trabajadores', data);
//         this.trabajadores = data;
//       })
//     }

//       registrar_cliente(){
//         let nombre = prompt("Ingresa nombre");
//         let apellido = prompt("Ingresa apellido");
//         this.clientes.push({
//           nombres : nombre,
//           apellidos :apellido
//         });
//       }
//       registrar_trabajador(){
//         let nombre = prompt("Ingresa nombre");
//         let dni = prompt("Ingresa dni");
//         this.trabajadores.push({
//           nombre_completo : nombre,
//           dni : dni 
//         });
//       }