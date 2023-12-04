const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'corso_spring',
    port:'3306'
});

con.connect((err) => {
    if(err){
        console.log("errore connessione db");
    }else{
        console.log("connessione db eseguita");
    }
})
module.exports = con;