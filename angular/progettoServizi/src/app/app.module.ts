import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiziotestService } from './serviziotest.service';
import { Componente1Component } from './componente1/componente1.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ServiziComponent } from './servizi/servizi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { HighlightDirective } from './highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    HomeComponent,
    ContattiComponent,
    ServiziComponent,
    NavbarComponent,
    ErrorComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [/*ServiziotestService non serve scriverlo perchè nel serviziotest.ts c'è scritto root in @Injectable (potevo mettere un componente specifico)*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
