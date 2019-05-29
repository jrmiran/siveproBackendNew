var dbConnection = require('../../config/dbConnection');


module.exports = function(app, client){
    var con = dbConnection();
    
    app.get(`/${client}/:nameEmpresa`, function(req, res){  
        console.log(req.params.nameEmpresa)
        let sql = `Select ClienteEmpresa.nome from ClienteEmpresa, Cliente where ClienteEmpresa.empresa_id = Cliente.id and Cliente.nome = ${req.params.nameEmpresa}`;
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
    
}