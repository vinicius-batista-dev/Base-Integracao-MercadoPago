const express = require('express');
const MercadoPago = require('mercadopago');
const app = express();

const PORT = 3000;

MercadoPago.configure({
    sandbox: true,
    //sua token com mercado pago
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
            email: emailDoPagador
        },
        external_reference: id
    }
    try{
        var pagamento = await MercadoPago.preferences.create(dados);
        //Banco.SalvarPagamento({id: id, pagador: emailDoPagador});
        return res.redirect(pagamento.body.init_point);

    }catch(err){
        return res.send(err.message);
    }
  
});

app.post("/not", (req, res) => {
    console.log(req.query);
    res.send("OK");
})

app.listen(PORT, (req, res) => {
    console.log("Servidor rodando")
})