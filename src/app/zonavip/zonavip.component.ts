import { Component } from '@angular/core';

@Component({
	selector: 'zonavip',
	templateUrl:'./zonavip.component.html',
	styleUrls:['./zonavip.component.css']
}) 

export class ZonavipComponent{

public zonavipObj: any[]  = [
	{ 
		"nombreLink" : "Registrate",
		"imagenFondo": "http://www.pacoyescas.com/img/RUsuarios.png",
		"direccionEnlace":""
	
	}
];

}