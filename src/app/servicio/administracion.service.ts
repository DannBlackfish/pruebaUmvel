import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { Administracion } from '../interfaces/administracion';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  private api = 'https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503'

  constructor(private http: HttpClient
    ) { }

  getAllAdministracion() {
    const path = `${this.api}/users`;
    return this.http.get<Administracion[]>(path);
  }

  getAdministracion(id: string) {
    const path = `${this.api}/users/${id}`;
    return this.http.get<Administracion[]>(path);
  }
}
