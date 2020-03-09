//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, serviceOrderId, dbConnection){
    var con = dbConnection();
    
    app.get(`/${serviceOrderId}/:soId`, function(req, res){
        let sql = `SELECT * FROM OrdemServico WHERE OrdemServico.id = ${req.params.soId}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}