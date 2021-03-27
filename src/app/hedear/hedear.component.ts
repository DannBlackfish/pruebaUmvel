import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicio/autenticacion.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-hedear',
  templateUrl: './hedear.component.html',
  styleUrls: ['./hedear.component.css']
})
export class HedearComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  isAuth(){
    return this.autenticacionService.isAuthenticated();
  }

  onLogout() {
    this.autenticacionService.logout();
    this.router.navigate(['/'])
  }

}
