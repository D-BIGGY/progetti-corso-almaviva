import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlloComponent } from './form-controllo/form-controllo.component';
import { Componente1Component } from './componente1/componente1.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlloComponent,
    Componente1Component
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
