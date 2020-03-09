

module.exports = function(app, postSearchPaymentFromRequest, dbConnection, pool){
    app.post(`/${postSearchPaymentFromRequest}`, function(req, res){
        let sql = `SELECT * FROM Pagamento WHERE id IN (SELECT pagamento_id from Pedido_pagamentos WHERE pedido_id = ${req.body.id})`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}