import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  nome="";
  cognome=""
  eta=0;
  email="";
  percorosok="https://www.dentalinfo.nl/wp-content/uploads/2022/09/Voorbeelden-PMO-checklijst.jpg";
  percorsono="https://www.pinclipart.com/picdir/middle/26-268718_no-png-icon-red-no-icon-clipart.png";
  etaminima=true;
  
  clicca(){

    if(this.eta<18){
      this.nome="ETA' MINIMA NON RAGGIUNTA";
      this.cognome="ETA' MINIMA NON RAGGIUNTA";
      this.email="ETA' MINIMA NON RAGGIUNTA";
      this.etaminima=false;
    }
    
    }
    reset(){
      this.nome="";
      this.cognome="";
      this.email="";
      this.eta =0;
      this.etaminima=true;

    }



}
