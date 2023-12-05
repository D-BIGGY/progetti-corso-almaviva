import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  visibile = false;
  confrontoSW = 2;
  styles = {};
  presente = true;

  /*inviadati(){
    this.mandatiapadre.emit(this.valoreDaFiglio);
  }*/

  /*@Output() mandatiapadre = new EventEmitter<string>();*/

  valoreDaFiglio ="ayo kratos??";

  @Input() datiricevuti:any;
  /*@Input() lol:any;*/

  ngOnInit():void {
    console.log(this.datiricevuti);
  }

  ngOnChanges(changes: SimpleChange){
    console.log(this.datiricevuti)//on init non funziona più con il cambiamento in console.log()
  }

  setStyles (){
    this.presente = !this.presente
    this.styles = {'background-color': /*this.presente ? 'red' : 'blue'*/'#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)}//colore casuale
  };

  /*persone=[
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
  ]*/

}
