import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { Administracion } from '../interfaces/administracion';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  url:string = "https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503"


  constructor(private http: HttpClient
    ) { }

  getAllAdministracion():Observable<Administracion[]> {
    let url = this.url;
    return this.http.get<Administracion[]>(url)
  }


  // getAdministracion(id: number) {
  //   return this.http.get<Administracion>(`${environment.baseUrlAPI}/${id}`)
  // }

//   getSystems(): Observable<System[]> {
//     let url = 'http://localhost:50000/...';
//      console.log(url);
//      return this.http.get(url)
//        .map(this.extractData);
//  }
 
//  private extractData(res: Response) {
//    let body = res.json();
//    console.log("extraData: ");
//    if (body && body.users) {
//      body=body.users;
//    }
//    return body || []; // devolvemos un array vacio si la respuesta no tiene un array
//  }


}
