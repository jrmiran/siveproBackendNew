var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchProjectByStore){
    var con = dbConnection();
    
    app.post(`/${postSearchProjectByStore}`, function(req, res){
        let sql = `SELECT  d.id, c.nome as store, ce.nome as client, o.id as budget from Desenho as d JOIN Cliente as c JOIN ClienteEmpresa as ce JOIN Orcamento as o ON o.id = d.orcamento_id AND o.clienteEmpresaa_id = ce.id AND o.clienteJuridico_id = c.id WHERE c.id = ${req.body.storeId} ORDER BY d.id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}