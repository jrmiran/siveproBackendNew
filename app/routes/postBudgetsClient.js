var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postBudgetsClient){
    var con = dbConnection();
    
    app.post(`/${postBudgetsClient}`, function(req, res){
        //let sql = `SELECT FROM Orcamento as o JOIN ClienteEmpresa as ce ON o.clienteEmpresaa_id = ce.id WHERE ce.id = ${req.body.clientId}`;
        let sql = `SELECT ClienteEmpresa.nome as storeClient, Cliente.nome as clientName, Orcamento.id as budgetId, Orcamento.data as date, Orcamento.valorTotal as value, Orcamento.aprovado as approved FROM Orcamento join Cliente on Cliente.id = Orcamento.clienteJuridico_id or Cliente.id = Orcamento.pessoa_id join ClienteEmpresa on ClienteEmpresa.id = Orcamento.clienteEmpresaa_id WHERE Orcamento.clienteEmpresaa_id = ${req.body.clientId}`
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}