import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { environment, myNewConstant } from '../../../src/main';

@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.component.html',
  styleUrls: ['./benvenuto.component.css']
})
export class BenvenutoComponent implements OnInit/*, AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,DoCheck, OnDestroy*/{

  variabile = "variabilozza grodozza";
  titolo="boh";
  descrizione="ayo get sniffed"
  immagine_defeat = "https://www.vhv.rs/dpng/d/143-1431450_league-of-legends-defeat-icon-hd-png-download.png";
  
  macchine = [
    {
      modello:"subaru baracca",
      potenza:"peperonata"
    },
    {
      modello: "pandino",
      potenza: "sgravata"
    },
  ]
  lol;
  disponibile = true;
  bottone_attivo = false;

  onInput(e:Event){
    console.log((<HTMLInputElement>e.target).value);
  }

  onClick(/*e:any*/){
    /*console.log(e.target.value);*/
    console.log(this.titolo);
    this.titolo = "test fatto"
  }

  constructor(){
    console.log("costruttore");
    this.lol = environment.lol;
  }
  /*ngOnDestroy(): void {
    throw new Error('ng on destroy');
  }
  ngDoCheck(): void {
    throw new Error('ng do check');
  }
  ngAfterViewInit(): void {
    throw new Error('ng after view init');
  }
  ngAfterViewChecked(): void {
    throw new Error('ng after view checked');
  }
  ngAfterContentInit(): void {
    throw new Error('ng after content init');
  }
  ngAfterContentChecked(): void {
    throw new Error('ng after content cecked');
  }*/
  ngOnInit(){
    console.log("ng on init")
  };
}
