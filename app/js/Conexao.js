let express = require('express')

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "dev",
    password: "test",
    database: 'jogo'
})


let insert = con.query(
    "insert into pessoa (nome) values('joana')"
)

let update = con.query(
    "update pessoa set nome='marta' where id_pessoa ='11'"
)




let app = express()

app.get('/', (res, req) => {
    req.send("ola")

})

app.listen(5000, () => console.log('rodando'))