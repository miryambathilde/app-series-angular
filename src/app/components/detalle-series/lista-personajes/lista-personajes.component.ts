import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Personaje } from "src/app/interfaces/personaje.interface";
import { PersonajesService } from "src/app/services/personajes.service";

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  arrPersonajes: Personaje[];

  constructor(
    private personajesServices: PersonajesService,
    private activedRoute : ActivatedRoute
  )
  {
    this.arrPersonajes = [];
  }

  ngOnInit(): void {
    this.activedRoute.parent?.params.subscribe(params => {
      const idSerie = parseInt(params.idSerie);
      this.arrPersonajes = this.personajesServices.getPersonajeByIdSerie(idSerie);
      //console.log(this.arrPersonajes);
    })
  }

}
