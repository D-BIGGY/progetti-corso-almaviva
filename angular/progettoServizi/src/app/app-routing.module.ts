import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ServiziComponent } from './servizi/servizi.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'/home'},/* pathMatch:'full' previene che angular prenda come home il riferimento alla cartella stessa */
  {path: 'home', component:HomeComponent},
  {path: 'contatti', component: ContattiComponent},
  {path:'servizi', component: ServiziComponent, canActivate:[AuthGuard]},
  {path:'contatti/:id', component: ContattiComponent},
  {path:'404', component: ErrorComponent},
  {path:'**', redirectTo: '/404'}/* (**) significa tutte le pagine che non sono presenti nell'eltenco del path */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
