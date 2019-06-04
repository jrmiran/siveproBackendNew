var dbConnection = require('../../config/dbConnection');


module.exports = function(app, budgetInsertion){
    var con = dbConnection();
    var codes = "";
    
    app.get(`/${budgetInsertion}/:budgetId/:budgetCodes`, function(req, res){  

        let sql = `Insert into Orcamento_codigos (orcamento_id, codigos) values ${budgetCodes}`
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}