import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentefiglio',
  templateUrl: './componentefiglio.component.html',
  styleUrls: ['./componentefiglio.component.css']
})
export class ComponentefiglioComponent {

  @Output() mandaeta = new EventEmitter<string>();

  eta = 0;
  test='';

  Padrozzo(){
    this.test = 'cia';
    console.log("invio");
    this.mandaeta.emit(this.test);
  }
  
  constructor(){
  }
}
