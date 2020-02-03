var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchAllProjects){
    var con = dbConnection();
    
    app.post(`/${postSearchAllProjects}`, function(req, res){
        let sql = `SELECT * FROM Pedido; SELECT * FROM Pedido_orcamentos; SELECT * FROM Pedido_clientesEmpresa; SELECT * FROM Pedido_pagamentos;`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}