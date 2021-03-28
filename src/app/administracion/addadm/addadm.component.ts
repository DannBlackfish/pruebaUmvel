import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { database } from 'firebase';

import { Administracion } from '../../interfaces/administracion'
import { AdministracionService } from '../../servicio/administracion.service'


@Component({
  selector: 'app-addadm',
  templateUrl: './addadm.component.html',
  styleUrls: ['./addadm.component.css']
})
export class AddadmComponent implements OnInit {

  administracion: any 

  constructor(private administracionService: AdministracionService, 
              private router:Router) { }

  ngOnInit(): void {
    this.administracionService.getAllAdministracion().subscribe(data => {
      this.administracion = data
      console.log(data)
    })
  }

  // getAllAdministracion() {
  //   this.administracionService.getAllAdministracion()
  //   .subscribe(administracion => {
  //     console.log(administracion);
  //   })
  // }

  // getAdministracion() {
  //   this.administracionService.getAdministracion(1)
  //   .subscribe(administracion => {
  //     console.log(administracion);
  //   })
  // }

}
