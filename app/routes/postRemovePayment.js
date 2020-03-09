
module.exports = function(app, postRemovePayment, dbConnection, pool){
    
    app.post(`/${postRemovePayment}`, function(req, res){
        let sql = `DELETE FROM Pagamento WHERE Pagamento.id in (${req.body.paymentId})`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}