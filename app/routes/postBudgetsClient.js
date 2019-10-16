var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postBudgetsClient){
    var con = dbConnection();
    
    app.post(`/${postBudgetsClient}`, function(req, res){
        let sql = `SELECT * FROM Orcamento JOIN ClienteEmpresa ON Orcamento.clienteEmpresaa_id = ClienteEmpresa.id WHERE ClienteEmpresa.id = ${req.body.clientId}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}