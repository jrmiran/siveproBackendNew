var dbConnection = require('../../config/dbConnection');


module.exports = function(app, budgetInsertion){
    var con = dbConnection();
    
    app.get(`/${budgetInsertion}/:budgetCodes/:budgetAmbients`, function(req, res){  
        
        let sql = `Insert into Orcamento_codigos (Orcamento_id, codigos) values ${req.params.budgetCodes}; Insert into Orcamento_comodos (Orcamento_id, comodos) values ${req.params.budgetAmbients}`;
        
        con.query(sql, function(err, result){
            res.send(result);
            
        });
    });
}