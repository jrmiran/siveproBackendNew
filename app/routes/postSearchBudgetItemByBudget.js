

module.exports = function(app, postSearchBudgetItemByBudget, dbConnection, pool){    
    app.post(`/${postSearchBudgetItemByBudget}`, function(req, res){
        let sql = `SELECT * FROM ItemOrcamento WHERE orcamento_id = ${req.body.budgetId}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}