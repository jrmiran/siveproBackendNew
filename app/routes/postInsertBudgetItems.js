var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postInsertBudgetItems){
    var con = dbConnection();
    
    app.post(`/${postInsertBudgetItems}`, function(req, res){
        let sql = `INSERT INTO ItemOrcamento(orcamento_id, quantidade, codigo, item, detalhe, medida, comodo, necessario, valorUnitario, valorTotal, desconto, valorComDesconto, numero) VALUES ${req.body.query}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}