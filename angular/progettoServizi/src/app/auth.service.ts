import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  utenteLoggato=true;


  UtenteLog(){
    return this.utenteLoggato;
  }

  /*poi viene scritto ng g guard auth --functional=false nel cmd*/
}
