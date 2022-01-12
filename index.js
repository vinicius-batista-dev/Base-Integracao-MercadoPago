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


app.get("/pagar", async (req, res) => {

    

    var id = "" + Date.now();
    var emailDoPagador = "viniciusbbf3@hotmail.com";

    var dados = {
        items: [
            item = {
                id: " " + Date.now(),
                description: "2x video game; 3x camisas",
                quntity: 1,
                currency_id: 'BRL',
                unit_price: parseFloat(150)
            }
        ],
        //Na hora que o pagamento vai ser gerado no banco
        payer: {
            email: "viniciusbbf3@hotmail.com"
        },
        external_reference: id
    }
    try{
        var pagamento = await MercadoPago.preferences.create(dados);
        console.log(pagamento);
        return res.redirect(pagamento.body.init_point);

    }catch(err){
        return res.send(err.message);
    }
  
});

app.listen(PORT, (req, res) => {
    console.log("Servidor rodando")
})