import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AdministracionService } from './servicio/administracion.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private administracionService: AdministracionService) { }
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCfkL4nqwHpi1DB9cAH0bDpz59M9gVnMak",
      authDomain: "umvelprueba.firebaseapp.com"
      
    })
  }

  getAllAdministracion() {
    this.administracionService.getAllAdministracion()
    .subscribe(todos => {
      console.log(todos);
    })
  }
  
}
