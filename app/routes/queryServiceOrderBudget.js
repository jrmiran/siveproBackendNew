var dbConnection = require('../../config/dbConnection');

module.exports = function(app, serviceOrderBudget){
    var con = dbConnection();
    
    app.get(`/${serviceOrderBudget}/:soId`, function(req, res){
        let sql = `SELECT * FROM OrdemServico, Orcamento WHERE OrdemServico.id = ${req.params.soId} and Orcamento.id = OrdemServico.orcamento_id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}