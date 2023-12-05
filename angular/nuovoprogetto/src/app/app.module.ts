import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Componente1Component } from './componente1/componente1.component';
import { ComponentefiglioComponent } from './componentefiglio/componentefiglio.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { NuovoDavveroComponent } from './nuovo-davvero/nuovo-davvero.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ServiziComponent } from './servizi/servizi.component';

@NgModule({
  declarations: [
    AppComponent,
    BenvenutoComponent,
    NavbarComponent,
    Componente1Component,
    ComponentefiglioComponent,
    ComponentePadreComponent,
    NuovoDavveroComponent,
    HomeComponent,
    ContattiComponent,
    ServiziComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
