import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model'
import { PersonasService } from './persona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(private personasService: PersonasService){}

  ngOnInit():void {
    this.personas = this.personasService.personas;
  }

  // onPersonaAgregada(persona: Persona){
  //   //this.personas.push(persona);
  //   this.personasService.agregarPersona(persona);
  // }
}
 