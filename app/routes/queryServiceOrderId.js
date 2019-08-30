var dbConnection = require('../../config/dbConnection');

module.exports = function(app, serviceOrderId){
    var con = dbConnection();
    
    app.get(`/${serviceOrderId}/:soId`, function(req, res){
        let sql = `SELECT * FROM OrdemServico WHERE OrdemServico.orcamento_id = ${req.params.budgetId}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}