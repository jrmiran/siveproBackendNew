var dbConnection = require('../../config/dbConnection');


module.exports = function(app, serviceOrder){
    var con = dbConnection();
    
    app.get(`/${serviceOrder}/:budgetId`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql = `SELECT * FROM OrdemServico WHERE OrdemServico.orcamento_id = ${req.params.budgetId}`;
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
    
    
}