//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchProjectByStore, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postSearchProjectByStore}`, function(req, res){
        let sql = `SELECT  d.local as local, d.id, c.nome as store, ce.nome as client, o.id as budget, d.ambiente as ambient, m.nome as material, m.tamanhoReal, m.tamanhoComercial from Desenho as d JOIN Cliente as c JOIN ClienteEmpresa as ce JOIN Orcamento as o JOIN Materia as m ON o.id = d.orcamento_id AND o.clienteEmpresaa_id = ce.id AND o.clienteJuridico_id = c.id AND m.id = d.materia_id WHERE c.id = ${req.body.storeId} ORDER BY m.nome`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}