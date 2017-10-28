import { Component } from '@angular/core';

@Component({
	selector: 'contacto',
	templateUrl:'./contacto.component.html',
	styleUrls:['./contacto.component.css'
	]
}) 

export class ContactoComponent{
	
	/**nombreContacto: String ;
	correoContacto: String ;
	telefonoContacto: String ;
	mensajeContacto: String ;
*/
	newTodo(){
		console.log("newTOdo");
	}
}