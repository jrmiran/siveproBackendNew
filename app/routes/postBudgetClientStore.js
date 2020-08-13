//var dbConnection = require('../../config/dbConnection');
var poolConnection = require ('../../config/poolConnection')

module.exports = function(app, postBudgetClientStore, dbConnection, pool){
    
    app.post(`/${postBudgetClientStore}`, function(req, res){
        let sql = ` SELECT o.id, ce.nome as nameClient, cj.nome as nameStore from Orcamento as o, ClienteEmpresa as ce, Cliente as cj WHERE o.id = ${req.body.budgetId} and ce.id = o.clienteEmpresaa_id and cj.id = o.clienteJuridico_id`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
        
    });    
}