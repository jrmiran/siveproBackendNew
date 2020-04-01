

module.exports = function(app, postSearchBudget, dbConnection, pool){
    
    app.post(`/${postSearchBudget}`, function(req, res){
        let sql = `SELECT ${req.body.budgetId} INTO @BUDGETID;
SELECT * FROM Orcamento WHERE id=@BUDGETID;
SELECT * FROM Cliente WHERE id = (SELECT Orcamento.clientejuridico_id FROM Orcamento WHERE Orcamento.id = @BUDGETID);
SELECT * FROM ClienteEmpresa WHERE id = (SELECT Orcamento.clienteEmpresaa_id FROM Orcamento WHERE Orcamento.id = @BUDGETID);
SELECT * FROM Vendedor WHERE id = (SELECT Orcamento.vendedor_id FROM Orcamento WHERE Orcamento.id = @BUDGETID);
SELECT * FROM ItemOrcamento WHERE orcamento_id = @BUDGETID`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}