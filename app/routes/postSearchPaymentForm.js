

module.exports = function(app, postSearchPaymentForm, dbConnection, pool){
    app.post(`/${postSearchPaymentForm}`, function(req, res){
        let sql = `SELECT * FROM FormaPagamento`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}