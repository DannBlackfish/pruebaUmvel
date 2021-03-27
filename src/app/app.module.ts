import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HedearComponent } from './hedear/hedear.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicio/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { AdministracionService } from './servicio/administracion.service';
import { AddadmComponent } from './administracion/addadm/addadm.component';
import { GuardService } from './servicio/guard.service'

const routes: Routes = [
  { path: '', component: InicioComponent },
  // { path: '**', component: InicioComponent },
  { path: 'addadm', component: AddadmComponent, canActivate: [GuardService] },
  { path: 'registro', component: RegistroComponent},
  { path: 'inises', component: InisesComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HedearComponent,
    RegistroComponent,
    InisesComponent,
    AddadmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutenticacionService,
              AdministracionService,
              GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
