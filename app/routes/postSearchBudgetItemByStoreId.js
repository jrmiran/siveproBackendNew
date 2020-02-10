var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchBudgetItemByStoreId){
    var con = dbConnection();
    
    app.post(`/${postSearchBudgetItemByStoreId}`, function(req, res){
        let sql = `SELECT io.id, io.quantidade, io.codigo, io.item, io.detalhe, io.medida, io.comodo, io.necessario, io.valorUnitario, io.valorTotal, io.desconto, io.valorComDesconto, io.orcamento_id, io.numero FROM ItemOrcamento as io, Orcamento as o WHERE o.clienteJuridico_id = ${req.body.id} and io.orcamento_id = o.id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}