import { Component } from '@angular/core';

@Component({
  selector: 'app-form-controllo',
  templateUrl: './form-controllo.component.html',
  styleUrls: ['./form-controllo.component.css']
})
export class FormControlloComponent {

  eta = 0;

  constructor(){
  }

  verifica(/*e:any*/){
    /*var eta:string = (<HTMLInputElement>e.target).value;*/
    /*console.log(this.eta);*/
    if( this.eta >= 18)
      console.log('maggiorenne');
  }
}
