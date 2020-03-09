
module.exports = function(app, postInsertPaymentOnRequest, dbConnection, pool){

    app.post(`/${postInsertPaymentOnRequest}`, function(req, res){
        console.log(req.body);
        let sql = `INSERT INTO Pedido_pagamentos(pedido_id, pagamento_id) VALUES ${req.body.query}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}