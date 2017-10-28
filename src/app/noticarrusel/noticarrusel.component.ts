import { Component } from '@angular/core';
import { NoticarruselService } from  './noticarrusel.service';


@Component({
	selector: 'noticarrusel',
	templateUrl: './noticarrusel.component.html',
	styleUrls: ['./noticarrusel.component.css'],
	providers: [ NoticarruselService]
})

export class NoticarruselComponent {
	public lstConfigCarrusel;


	constructor(private _noticarruselService: NoticarruselService){

	}

	ngOnInit(){
		this._noticarruselService.ejemplo().subscribe(
			result => {
				this.lstConfigCarrusel = result;

			},
			error => {
				console.log("=>Error: " + error);
			});

	}

}