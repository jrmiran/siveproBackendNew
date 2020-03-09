//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postInsertPaymentOnRequest, dbConnection){
    var con = dbConnection();
    app.post(`/${postInsertPaymentOnRequest}`, function(req, res){
        console.log(req.body);
        let sql = `INSERT INTO Pedido_pagamentos(pedido_id, pagamento_id) VALUES ${req.body.query}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}