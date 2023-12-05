import { Component } from '@angular/core';
import { ServiziComponent } from '../servizi/servizi.component';
import { ServiziotestService } from '../serviziotest.service';
import { ActivatedRoute } from '@angular/router';/*fa leggere ad angular i parametri passati per path url*/

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})

export class ContattiComponent {

  macchine:any;
  macchina:any;
  id:any;

  constructor(private serviziotest:ServiziotestService, private route:ActivatedRoute){

  }

  ngOnInit():void{
    console.log(this.serviziotest.getMacchine());
    this.macchine = this.serviziotest.getMacchine();
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
    this.macchina = this.serviziotest.getMacchina(this.route.snapshot.paramMap.get('id'));
    console.log(this.serviziotest.getMacchina(this.route.snapshot.paramMap.get('id')));
  }

}
