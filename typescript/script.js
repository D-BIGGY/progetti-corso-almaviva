"use strict";
const inserisci = document.getElementById("dafile1");
if (inserisci != null) {
    inserisci.innerText = "ho inserito del testo dal file ts 1 brrrrr";
}
/*function somma(a : number,b : number){
    return a+b;
}
console.log(somma(2,2));*/
/*let test = 10;
function somma(a,b=0){
    return a+b;
}
console.log(somma(5));
type Dati = {
    nome: string,
    cognome:string,
    id:number
}

let dati:Dati;

dati = {
    nome: "Giorgio",
    cognome:"Vanni",
    id:10
}

dati.id;

function getData(data: {id:number; username:string; password:string}){
    console.log(data.id);
    console.log(data.username);
    console.log(data.password);
}

getData({id:1,username:'',password:''});

let array1 = [1,'ciao',true];

const tupla: [number,number]= [1,2]/*con const non può essere modificato il numero di

let prova: (number | string);

function controllaDati(persona: Dati){

}

enum reparto{SVILUPPO=101,
             GRAFICA,
             AMMINISTRAZIONE}

const dati = {
    nome: "Giorgio",
    cognome:"Vanni",
    reparto: reparto.SVILUPPO
}

*/
function somma(a, b) {
    return a + b;
}
function sottrazione(a, b) {
    return a - b;
}
function stampa(a) {
    console.log(a);
}
let varf;
varf = somma;
//varf = sottrazione;
//varf = stampa; erroe, gli servono 2 parametri e il ritorno number altrimenti non worka
console.log(varf(4, 4)); //8
