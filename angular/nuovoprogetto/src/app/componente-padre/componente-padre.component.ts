import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {

  eta = 0;

  constructor(){
  }

  verificaDatiOttenuti(eta2:any){
    console.log("test");
    this.eta = eta2;
    if(this.eta>=18){
      console.log("maggiorenne");
    }else{
      console.log("minorenne");
    }
  }
    

}
