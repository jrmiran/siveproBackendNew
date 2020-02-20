var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchPaymentFromRequest){
    var con = dbConnection();
    app.post(`/${postSearchPaymentFromRequest}`, function(req, res){
        let sql = `SELECT * FROM Pagamento WHERE id IN (SELECT pagamento_id from Pedido_pagamentos WHERE pedido_id = ${req.body.id})`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}