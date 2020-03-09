
module.exports = function(app, postSearchPaymentType, dbConnection, pool){
    app.post(`/${postSearchPaymentType}`, function(req, res){
        let sql = `SELECT * FROM TipoPagamento`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}