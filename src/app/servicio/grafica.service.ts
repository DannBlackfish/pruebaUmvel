import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor(private _http: HttpClient) { }

  carros(){
    const urlAPI = 'https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a'
    return this._http.get(urlAPI)
    .map( res => res )
  }
}
