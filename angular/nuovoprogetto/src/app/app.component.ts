import { Component } from '@angular/core';
import { environment, myNewConstant } from '../../src/main';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  lol;


  cliccami(){
    this.persone=[
      {
        nome: "abrogio",
        cognome:"Vanni",
        disponibile : false
      },
      {
        nome:"colera",
        cognome: "D'avena",
        disponibile : false
      },
      {
        nome: "monkey",
        cognome: "dude",
        disponibile : true
      }
    ]
  }
  

  persone=[
    {
      nome: "Giorgio",
      cognome:"Vanni",
      disponibile : true
    },
    {
      nome:"Cristina",
      cognome: "D'avena",
      disponibile : false
    },
    {
      nome: "monkey",
      cognome: "dude",
      disponibile : true
    }
  ]
  constructor(){
    this.lol= environment.lol;
  }

  verificaDatiOttenuti(eta:any){
    console.log("test");
    if(eta>=18){
      console.log("maggiorenne");
    }else{
      console.log("minorenne");
    }
  }

  /*datiRicevuti(valore:string){
    console.log(valore);
  }*/

  title = 'nuovoprogetto';
  
  immagine_logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/800px-League_of_Legends_2019_vector.svg.png";
}
