import { Component } from '@angular/core';
import { ServiziotestService } from './serviziotest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progettoServizi';

  constructor(private serviziotest: ServiziotestService){

  }

  ngOnInit(){
  }

  buttatutto(){
    console.log(this.serviziotest.getMacchine())
  }

}
