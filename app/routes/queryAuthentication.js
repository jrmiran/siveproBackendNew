//var dbConnection = require('../../config/dbConnection');


module.exports = function(app, authentication, dbConnection){
    var con = dbConnection();
    
    app.get(`/${authentication}/:user/:password`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql = `SELECT * FROM Usuario WHERE Usuario.id = ${req.params.user} and Usuario.senha = ${req.params.password}`;
        
        con.query(sql, function(err, result){
            res.send(result);
            //con.end();
        });
    });
}