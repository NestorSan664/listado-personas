import { Component, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  //nombreInput:string;
  //apellidoInput:string;
  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  constructor() { }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value);
    this.personaCreada.emit(persona1);
    this.nombre.nativeElement.value="";
    this.apellido.nativeElement.value="";
  }

  ngOnInit(): void {
  }

}
