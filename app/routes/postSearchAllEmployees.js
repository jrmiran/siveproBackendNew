var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchAllEmployees){
    var con = dbConnection();
    
    app.post(`/${postSearchAllEmployees}`, function(req, res){
        let sql = `SELECT SQL_CACHE * FROM Funcionario WHERE Funcionario.dataDemissao = ''`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}