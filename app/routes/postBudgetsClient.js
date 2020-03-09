module.exports = function(app, postBudgetsClient, dbConnection, pool){
    var con = dbConnection();
    
    app.post(`/${postBudgetsClient}`, function(req, res){
        let sql = `SELECT ClienteEmpresa.nome as storeClient, Cliente.nome as clientName, Orcamento.id as budgetId, Orcamento.data as date, Orcamento.valorTotal as value, Orcamento.aprovado as approved FROM Orcamento join Cliente on Cliente.id = Orcamento.clienteJuridico_id or Cliente.id = Orcamento.pessoa_id join ClienteEmpresa on ClienteEmpresa.id = Orcamento.clienteEmpresaa_id WHERE Orcamento.clienteEmpresaa_id = ${req.body.clientId}`
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}