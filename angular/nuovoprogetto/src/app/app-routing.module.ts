import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiziComponent } from './servizi/servizi.component';
import { ContattiComponent } from './contatti/contatti.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servizi', component: ServiziComponent},
  {path: 'contatti',  component: ContattiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
