//var dbConnection = require('../../config/dbConnection');


module.exports = function(app, draw, dbConnection){
    var con = dbConnection();
    
    app.get(`/${draw}/:budgetId`, function(req, res){
        
        console.log(req.params.nameEmpresa)
        let sql = ` SELECT clienteJuridico_id FROM Orcamento WHERE Orcamento.id = ${req.params.budgetId} INTO @STORE;
                    SELECT clienteEmpresaa_id FROM Orcamento WHERE Orcamento.id = ${req.params.budgetId} INTO @CLIENT;
                    SELECT nome FROM Cliente WHERE Cliente.id = @STORE;
                    SELECT nome FROM ClienteEmpresa WHERE ClienteEmpresa.id = @CLIENT;`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}