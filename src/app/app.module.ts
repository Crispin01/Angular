import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ListadoComponent } from './listado/listado.component';
import { FotosComponent } from './fotos/fotos.component';
import { ExamenComponent } from './examen/examen.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PokedexComponent,
    ListadoComponent,
    FotosComponent,
    ExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
