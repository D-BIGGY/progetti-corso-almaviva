import { Component } from '@angular/core';
import { ServiziotestService } from '../serviziotest.service'; /*sto importando il servizio*/

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {

  macchine:any;

  constructor(private serviziotest: ServiziotestService){

  }

  ngOnInit(){
    console.log(this.serviziotest.getMacchine())
  
  }

  cambiarobba(){
    this.serviziotest.setMacchina(2,{modello: 'test',potenza:'test'});
  }

}
