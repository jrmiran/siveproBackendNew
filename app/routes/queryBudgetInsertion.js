var dbConnection = require('../../config/dbConnection');


module.exports = function(app, budgetInsertion){
    var con = dbConnection();
    var codes = "";
    
    app.get(`/${budgetInsertion}/:budgetId/:budgetCodes`, function(req, res){  
        var codes;
        console.log(req.params.budgetCodes);
        req.params.budgetCodes.forEach(function(data){
           this.codes = this.codes + "(" + budgetId + "," + data + "),"; 
        });
        
        
        
        codes = this.codes.substr(1,(string.length - 1));
        
        
        
        let sql = `Insert into Orcamento_codigos (orcamento_id, codigos) values ${codes}`
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}