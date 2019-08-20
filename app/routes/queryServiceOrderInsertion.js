var dbConnection = require('../../config/dbConnection');

module.exports = function(app, serviceOrderInsertion){
    var con = dbConnection();
    
    app.get(`/${serviceOrderInsertion}/:client/:detail/:ambient/:item/:store/:measure/:note/:value/:seller/:budgetId/:stone`, function(req, res){
        let sql = `INSERT INTO OrdemServico(cliente, detalhe, comodo, item, loja, medida, observacao, valor, vendedor, orcamento_id, pedra, tipoCliente) VALUES (${req.params.client}, ${req.params.detail}, ${req.params.ambient}, ${req.params.item}, ${req.params.store}, ${req.params.measure}, ${req.params.note}, ${req.params.value}, ${req.params.seller}, ${req.params.budgetId}, ${req.params.stone}, 'Empresa')`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}