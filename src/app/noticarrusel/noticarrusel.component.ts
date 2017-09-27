import { Component } from '@angular/core';

@Component({
  selector: 'noticarrusel',
  templateUrl: './noticarrusel.component.html',
   styleUrls: ['./noticarrusel.component.css']
})

export class NoticarruselComponent {
public imagenes: any[]  = [
    { "title": "Cursos Blues", "url": "http://www.pacoyescas.com/img/sliderpacoweb4.png" },
	{ "title": "etc 1", "url": "http://www.pacoyescas.com/img/sliderpacoweb2.png" },
	{ "title": "etc 2", "url": "http://www.pacoyescas.com/img/sliderpacoweb3.png" },
	
];
}