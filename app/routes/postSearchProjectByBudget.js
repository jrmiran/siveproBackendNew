var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchProjectByBudget){
    var con = dbConnection();
    
    app.post(`/${postSearchProjectByBudget}`, function(req, res){
        let sql = `SELECT  d.local as local, d.id, c.nome as store, ce.nome as client, o.id as budget, d.ambiente as ambient, m.nome as material from Desenho as d JOIN Cliente as c JOIN ClienteEmpresa as ce JOIN Orcamento as o JOIN Materia as m ON o.id = d.orcamento_id AND o.clienteEmpresaa_id = ce.id AND o.clienteJuridico_id = c.id AND m.id = d.materia_id WHERE o.id = ${req.body.budgetId} ORDER BY d.id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}