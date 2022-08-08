import { Component, Input, OnInit } from '@angular/core';
import { DbzModule } from '../dbz.module';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBZServices } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //@Input() personajes: Personaje[] = []; 

  get personajes(){
    return this.DBZServices.personajes;
  }

  constructor( private DBZServices: DBZServices){
    
  }
}
