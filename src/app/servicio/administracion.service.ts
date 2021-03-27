import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { Administracion } from '../interfaces/administracion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {


  constructor(private http: HttpClient
    ) { }

  getAllAdministracion(query='', page = 1) {
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`
    return this.http.get<Administracion[]>(filter);
  }

  getAdministracion(id: number) {
    return this.http.get<Administracion>(`${environment.baseUrlAPI}/${id}`)
  }



}
