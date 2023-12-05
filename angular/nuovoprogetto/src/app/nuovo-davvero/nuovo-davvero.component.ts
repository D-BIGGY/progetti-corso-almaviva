import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nuovo-davvero',
  templateUrl: './nuovo-davvero.component.html',
  styleUrls: ['./nuovo-davvero.component.css']
})
export class NuovoDavveroComponent {

  title = 'progettoNuovo';


  @ViewChild('inputuno') valorechevogliosalvare ! :  ElementRef<HTMLInputElement>;

  ngOnit():void{

  }

  ngAfterViewInit():void{
    console.log(this.valorechevogliosalvare.nativeElement.value);
  }

}


