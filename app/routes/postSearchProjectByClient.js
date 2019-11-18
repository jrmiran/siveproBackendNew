var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchProjectByClient){
    var con = dbConnection();
    
    app.post(`/${postSearchProjectByClient}`, function(req, res){
        let sql = `SELECT  d.id, c.nome as store, ce.nome as client, o.id as budget from Desenho as d JOIN Cliente as c JOIN ClienteEmpresa as ce JOIN Orcamento as o ON o.id = d.orcamento_id AND o.clienteEmpresaa_id = ce.id AND o.clienteJuridico_id = c.id WHERE ce.id = ${req.body.clientId} ORDER BY d.id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}