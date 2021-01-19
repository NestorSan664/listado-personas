import { Persona } from './persona.model'

export class PersonasService{
    personas: Persona[] = [new Persona("Nestor", "Sandoval Castellanos")];

    agregarPersona(persona: Persona){
        this.personas.push(persona);
    }
}
