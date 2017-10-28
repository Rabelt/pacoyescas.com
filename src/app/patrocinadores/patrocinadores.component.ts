import { Component } from '@angular/core';

@Component({
  selector: 'patrocinadores',
  templateUrl: './patrocinadores.component.html',
   styleUrls: ['./patrocinadores.component.css']
})

export class PatrocinadoresComponent {

public patrocinadoresObj: any[]  = [
	{ 
		"nombreEmpresa" : "SolColor",
		"imagenFondo": "http://www.pacoyescas.com/img/Publicidad.jpg",
		"urlEmpresa":"http://www.solcoraudio.com/depto.asp?dept_id=35"
	},
		{ 
		"nombreEmpresa" : "Fender",
		"imagenFondo": "https://pbs.twimg.com/profile_images/822227824706629633/Cggj1SXb_400x400.jpg",
		"urlEmpresa":"http://shop.fender.com/es-MX/start"
	}
];

}