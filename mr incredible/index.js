const con = require('./connessione.js');
const express = require('express');
//const spam = require('../first_es/robba.js');
const app = express();

let cors = require('cors');
var corsOption = {
    /*origin: 'http://127.0.0.1:5500',
    optionSuccessStatus:200*/
    }
    app.use(cors());

app.use(express.json(corsOption));

const port= 4200;

app.post('/', (req,res)=>{
    const dati=req.body;
    con.query("insert into utenti_visite_app SET ?", dati,(err,result)=>{
        if(err){
            console.log(err);
            res.send("eroore accesso alla tabella");
        }else{
            res.send(result);
        }
    });
});

app.get('/',(req, res) => {
    con.query('select * from utenti_visite_app', (err,result)=>{
        if(err){
            res.send("Errore accesso alla tabella")
        }else{
            /*JSON.stringify(result, null, 4)*/
            res.send(result);
            res.send("")
        }
    })
    //res.send('RICHIESTA API')
})

app.get('/jumpscare',(req,res) => {
    res.sendFile('./mrincredible.html', {root: __dirname })
})
app.get('/index',(req,res) => {
    res.sendFile('./index.html', {root: __dirname })
})

app.get('/ascensore',(req,res) => {
    res.sendFile('https://youtu.be/plRztVrDs-M?si=2ALvkGTgOQMNWFH1')
})

/*app.put('/',(req,res) =>{
    const dati = ['mrincredible',57];
    con.query("update utenti_visite_app set username=? where id =?", dati,(err,result)=>{
        if(err){
            console.log(err);
            res.send("errore accesso alla tabella");
        }else{
            res.send(result);
        }
    })
})*/
app.put('/:id',(req,res) =>{
    const dati = ['mrincredible',req.params.id];
    con.query("update utenti_visite_app set username=? where id =?", dati,(err,result)=>{
        if(err){
            console.log(err);
            res.send("errore accesso alla tabella");
        }else{
            res.send(result);
        }
    })
})
app.delete('/:id',(req,res) =>{
    const dati = [req.params.id];
    con.query("delete from utenti_visite_app where id =?", dati,(err,result)=>{
        if(err){
            console.log(err);
            res.send("errore accesso alla tabella");
        }else{
            res.send(result);
        }
    })
})

/*app.post('/',(req,resp) =>{
    console.log('POST API');
})*/

app.listen(port, ()=>{console.log('App in ascolto sulla porta: ' + port)});