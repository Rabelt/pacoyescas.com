import { Component } from '@angular/core';

@Component({
	selector: 'videotutorial',
	templateUrl: './videotutorial.component.html',
	styleUrls: ['./videotutorial.component.css']
})

export class VideotutorialComponent {

	public infCursos: any[]  = [
	{ 
		"tituloCurso":"Videotutorial Básico de Guitarra",
		"nivelCurso":"A", 
		"imagenFondo": "http://www.pacoyescas.com/img/CBlues.png",
		"tituloCategoria" : "Blues"
	},
	{ 
		"tituloCurso":"Videotutorial Intermedio de Guitarra",
		"nivelCurso":"C", 
		"imagenFondo":"http://www.pacoyescas.com/img/CBlues.png",
		"tituloCategoria":"Rock"
	}

	];

}