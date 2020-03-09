//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchBudgetByStoreId, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postSearchBudgetByStoreId}`, function(req, res){
        let sql = `SELECT o.id, o.data, o.desconto, o.valorTotal, o.clienteEmpresaa_id, o.vendedor_id, ce.nome as nomeCliente, v.nome as nomeVendedor FROM Orcamento o, ClienteEmpresa ce, Vendedor as v WHERE o.clienteJuridico_id = ${req.body.id} AND ce.id = o.clienteEmpresaa_id AND o.vendedor_id = v.id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}