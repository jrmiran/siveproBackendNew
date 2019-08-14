var dbConnection = require('../../config/dbConnection');


module.exports = function(app, statusBudget){
    var con = dbConnection();
    
    app.get(`/${statusBudget}/:id/:status`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql = `UPDATE Orcamento SET aprovado = ${req.params.status} WHERE Orcamento.id = ${req.params.id}`
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}