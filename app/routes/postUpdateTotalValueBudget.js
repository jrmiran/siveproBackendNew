module.exports = function(app, post, dbConnection, pool){

    app.post(`/${post}`, function(req, res){
        let sql = `UPDATE Orcamento SET valorTotal = ${req.body.totalValue} WHERE id = ${req.body.budgetId}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}