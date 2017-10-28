import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class NoticarruselService{

	public url:string ;
	public nombre:string = 'Prueba de Service JEJE';
	
	

	constructor(private _http:Http){

		//this.url = "http://10.211.55.7:8080/infocarrusel";
		this.url = "http://localhost:8081/informacioncarrusel";
	}
	
	ejemplo(){
		return this._http.get(this.url).map(res => res.json());
	}
}
