import { Component } from '@angular/core';

@Component({
	selector: 'tutorial',
	templateUrl: './tutorial.component.html',
	styleUrls: ['./tutorial.component.css']
})

export class TutorialComponent {

	public infCursos: any[]  = [
	{ 
		"tituloCurso":"Tutorial Básico de Guitarra",
		"nivelCurso":"A", 
		"imagenFondo": "http://www.pacoyescas.com/img/CBlues.png",
		"tituloCategoria" : "Blues"
	},
	{ 
		"tituloCurso":"Tutorial Intermedio de Guitarra",
		"nivelCurso":"C", 
		"imagenFondo":"http://www.pacoyescas.com/img/CBlues.png",
		"tituloCategoria":"Rock"
	},
	{ 
		"tituloCurso":"Tutorial Avanzado de Guitarra",
		"nivelCurso":"B", 
		"imagenFondo":"http://www.pacoyescas.com/img/CBlues.png",
		"tituloCategoria":"Reggae"
	}

	];

}