
module.exports = function(app, postInsertPaymentType, dbConnection, pool){
    app.post(`/${postInsertPaymentType}`, function(req, res){
        console.log(req.body);
        let sql = `INSERT INTO TipoPagamento (tipoPagamento) VALUES (${req.body.query})`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}