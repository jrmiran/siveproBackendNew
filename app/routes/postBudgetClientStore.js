//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postBudgetClientStore, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postBudgetClientStore}`, function(req, res){
        //con.connect();
        let sql = ` SELECT o.id, ce.nome as nameClient, cj.nome as nameStore from Orcamento as o, ClienteEmpresa as ce, Cliente as cj WHERE o.id = ${req.body.budgetId} and ce.id = o.clienteEmpresaa_id and cj.id = o.clienteJuridico_id`;
        con.query(sql, function(err, result){
            res.send(result);
            //con.end();
        });
    });    
}