function test(){
    let greg = document.createElement("p");
    greg.innerText = "bozo greve";
    
    document.getElementById("paragrafo1").innerText = greg.innerText;

    for(let i = 2; i<45; i++){
        let greg = document.createElement("p");
        greg.innerText = "bozo greve";
        document.body.appendChild(greg);
    }
}

function btn_click(){
    alert("get clicked");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

function btn_sax(){
    window.open("https://www.youtube.com/watch?v=Sagg08DrO5U", "_blank");
}
/*window.addEventListener('beforeunload', function (e) {
    window.open("https://www.youtube.com/watch?v=Sagg08DrO5U", "_blank");
    e.preventDefault();
    e.returnValue = '';
});*/

window.addEventListener('beforeunload', (event) => { 
    return false;
});
function close_window() {
    if (confirm("Close Window?")) {

        window.open("https://www.youtube.com/watch?v=Sagg08DrO5U", "_blank");
        setTimeout(() => {  close(); }, 2000);
        
    }
  }

function stampa_nome(){
    let nome_proibito = "Mario";
    if(document.getElementById("nome").value === "Mario"){
        console.log("not authorized bozo")
        window.open("https://www.youtube.com/watch?v=TnGl01FkMMo","_self");
        /*for(let i=0; i<4; i++){
            window.open("https://www.youtube.com/watch?v=Sagg08DrO5U", "_blank");
        }*/
    }else{
        console.log(document.getElementById("nome").value);
    }
}
function stampa_cognome(){
    console.log(document.getElementById("cognome").value);
}
function stampa_email(){
    console.log(document.getElementById("email").value);
}

test();
close_window();