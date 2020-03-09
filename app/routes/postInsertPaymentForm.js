
module.exports = function(app, postInsertPaymentForm, dbConnection, pool){

    app.post(`/${postInsertPaymentForm}`, function(req, res){
        console.log(req.body);
        let sql = `INSERT INTO FormaPagamento (formaPagamento) VALUES (${req.body.query})`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}