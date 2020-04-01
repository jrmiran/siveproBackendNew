module.exports = function(app, postEditBudgetStatus, dbConnection, pool){
    
    app.post(`/${postEditBudgetStatus}`, function(req, res){
        let sql = `UPDATE Orcamento SET aprovado = ${req.body.status} WHERE Orcamento.id = ${req.body.budgetId}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}