var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchAllProjects){
    var con = dbConnection();
    
    app.post(`/${postSearchAllProjects}`, function(req, res){
        let sql = `SELECT  d.id, c.nome, ce.nome, o.id from Desenho as d JOIN Cliente as c JOIN ClienteEmpresa as ce JOIN Orcamento as o ON o.id = d.orcamento_id AND o.clienteEmpresaa_id = ce.id AND o.clienteJuridico_id = c.id ORDER BY d.id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}