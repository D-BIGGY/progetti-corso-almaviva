import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element : ElementRef) {
    /*
    css per fare un color blink
    .blink{
  width:400px;
  height:400px;
  border:1px solid black;
  animation: blink 5s infinite;
}
@keyframes blink{
  0% {
    background: red;
  }
  20% {
    background: green;
  }
  40% {
    background: yellow;
  }
  60% {
    background: blue;
  }
  80% {
    background: orange;
  }
  100% {
    background: red;
  }
}

@-webkit-keyframes blink{
  0% {
    background: red;
  }
  20% {
    background: green;
  }
  40% {
    background: yellow;
  }
  60% {
    background: blue;
  }
  80% {
    background: orange;
  }
  100% {
    background: red;
  }
} */
    this.element.nativeElement.style.color = 'white' 
  }

  @Input() appHighlight = ''; /*il nome deve essere identico al selector altrimenti non funziona */

  @HostListener('mouseenter')onMouseEnter(){
    /*this.cambiaColore(this.appHighlight);*/
    this.element.nativeElement.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

  }
  /*@HostListener('mouseover')onMouseOver(){
    this.cambiaColore(this.appHighlight);
    

  }*/
  @HostListener('mouseleave')onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
  }

  cambiaColore(colore:string){
    this.element.nativeElement.style.backgroundColor = colore;
    /*'#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6) */
  }

}
