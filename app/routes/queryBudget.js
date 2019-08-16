var dbConnection = require('../../config/dbConnection');


module.exports = function(app, budget){
    var con = dbConnection();
    
    app.get(`/${budget}/:id`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql = `SELECT * FROM Orcamento WHERE Orcamento.id = ${req.params.id}`;
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
    
    
}