import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBZServices } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  @Input() nuevo:Personaje = {
    nombre:'',
    poder:0
  }

  constructor( private DBZServices: DBZServices){

  }

  //emitir eventos
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){ return; }
    //this.personajes.push(this.nuevo);
    
    //this.onNuevoPersonaje.emit( this.nuevo );
    this.DBZServices.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre:'',
      poder:0
    }
  }

}
