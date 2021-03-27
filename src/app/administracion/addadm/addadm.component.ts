import { Component, OnInit } from '@angular/core';
import { AdministracionService } from '../../servicio/administracion.service'


@Component({
  selector: 'app-addadm',
  templateUrl: './addadm.component.html',
  styleUrls: ['./addadm.component.css']
})
export class AddadmComponent implements OnInit {

  // administraciones: Administraciones[] = []

  // private pageNum=1;
  // private query:string;
  // private hideScrollHeight= 200;
  // private showScrollHeight= 500;

  constructor(private administracionService: AdministracionService) { }

  ngOnInit(): void {
  }

  getAllAdministracion() {
    this.administracionService.getAllAdministracion()
    .subscribe(administracion => {
      console.log(administracion);
    })
  }

  getAdministracion() {
    this.administracionService.getAdministracion(1)
    .subscribe(administracion => {
      console.log(administracion);
    })
  }

}
