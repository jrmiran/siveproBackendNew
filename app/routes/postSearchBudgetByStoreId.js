var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchBudgetByStoreId){
    var con = dbConnection();
    
    app.post(`/${postSearchBudgetByStoreId}`, function(req, res){
        let sql = `SELECT id, data, desconto, valorTotal, clienteEmpresaa_id, vendedor_id FROM Orcamento WHERE clienteJuridico_id = ${req.body.id}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}