import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  colore ='#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6) ;
  
}
