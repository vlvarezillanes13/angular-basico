import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DBZServices{

    private _personajes: Personaje[] = [
        {
          nombre:'Goku',
          poder: 15000
        },
        {
          nombre:'Vegeta',
          poder: 8500
        }
    ];

    get personajes(): Personaje[]{
        //romper la refencia ya que js lo pasa por refencia por default
        return [...this._personajes];        
    }

    constructor(){ }

    agregarPersonaje( personaje: Personaje ){
      this._personajes.push( personaje );
    }
}