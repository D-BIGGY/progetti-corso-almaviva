let valore;
let valorerecuperato;
let valorerecuperato1;

let studenti =["Mario","Vittorio","Luigi","Giorgio","Cristina"];
let studenti1 ={
    nome:"Giorgio",
    congome:"rossi",
    eta: 20
};
let studenti2 = [
    {
        nome:"Giorgio",
        congome:"rossi",
        eta: 20
    },
    {
        nome:"Giorgio",
        congome:"rossi",
        eta: 20
    },
    {
        nome:"Giorgio",
        congome:"rossi",
        eta: 20
    },
    {
        nome:"Giorgio",
        congome:"Vanni",
        eta: 20
    },
];

function test(){
    /*valore = document.getElementById("testo").value;
    sessionStorage.setItem("sessione", valore);
    localStorage.setItem("locale", valore);*/
    

    let valore = studenti[1];
    console.log(studenti1.congome);
    console.log(studenti2[3].congome);
    
    localStorage.setItem("listastudenti", studenti2.flatMap);
}

function test1(){
    valorerecuperato = sessionStorage.getItem("sessione");
    valorerecuperato1 = localStorage.getItem("listatudenti");
    console.log(valorerecuperato1);
}