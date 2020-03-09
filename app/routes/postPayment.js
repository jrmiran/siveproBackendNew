
module.exports = function(app, postPayment, dbConnection, pool){

    
    app.post(`/${postPayment}`, function(req, res){
        let sql = `SELECT * FROM Pagamento`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}