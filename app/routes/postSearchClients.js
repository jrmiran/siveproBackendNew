var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchClients){
    var con = dbConnection();
    app.post(`/${postSearchClients}`, function(req, res){
        let sql = `SELECT ClienteEmpresa.id as id, ClienteEmpresa.nome as nameClient, Cliente.nome as nameStore from ClienteEmpresa JOIN Cliente ON ClienteEmpresa.empresa_id = Cliente.id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}