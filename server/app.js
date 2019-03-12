const express = require("express");
var mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const app = express();
const port = 3001;

//Altere para os dados do seu banco
const host = 'localhost'
const user = 'root'
const password = ''
const database = 'testes'

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

var connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: "testes"
});

connection.connect();

app.get("/", function (req, res) {
    res.send("Hello Word");
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));