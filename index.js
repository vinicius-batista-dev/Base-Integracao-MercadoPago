const express = require('express');
const MercadoPago = require('mercadopago');
const app = express();

const PORT = 3000;

MercadoPago.configure({
    sandbox: true,
    access_token: 'TOKEN'
})

app.get("/", (req, res) => {
    res.send("Ola mundo" + Date.now());
})

app.get("/pagar", (req, res) => {
   
    var dados = {
        items: [
            item = {
                id: Date.now()
            }
        ]
    }
});

app.listen(PORT, (req, res) => {
    console.log("Servidor rodando")
})