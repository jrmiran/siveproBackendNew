module.exports = function(app, postInsertBudgetItems, dbConnection, pool){

    
    app.post(`/${postInsertBudgetItems}`, function(req, res){
        let sql = `INSERT INTO ItemOrcamento(orcamento_id, quantidade, codigo, item, detalhe, medida, comodo, necessario, valorUnitario, valorTotal, desconto, valorComDesconto, numero) VALUES ${req.body.query}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}