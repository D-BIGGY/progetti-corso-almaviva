import { Injectable } from '@angular/core';
/*injectable i servizi vengono inniettati dove ci servono, possono essere utilizzati in più posti (es. login [all'inizio del sito oppure prima di acquistare...])*/
@Injectable({
  providedIn: 'root'
})
export class ServiziotestService {

  macchine = [
    {modello: 'subaru baracca', potenza: 'peperonata'},
    {modello:'fiat topolino', potenza:'minnie'},
    {modello: '500',potenza:'spinte'}
  ]

  constructor() { }

  getMacchine (){
    return this.macchine;
  }

  getMacchina(i:any){
    return this.macchine[i];
  }

  setMacchina(i:number, macchina: any){
    this.macchine[i] = macchina;
  }
}
