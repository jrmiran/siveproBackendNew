
module.exports = function(app, postSearchProjectByClient, dbConnection, pool){
    
    app.post(`/${postSearchProjectByClient}`, function(req, res){
        let sql = `SELECT  d.local as local, d.id, d.aprovado as approved, c.nome as store, ce.nome as client, o.id as budget, d.ambiente as ambient, m.nome as material, m.tamanhoReal, m.tamanhoComercial from Desenho as d JOIN Cliente as c JOIN ClienteEmpresa as ce JOIN Orcamento as o JOIN Materia as m ON o.id = d.orcamento_id AND o.clienteEmpresaa_id = ce.id AND o.clienteJuridico_id = c.id AND m.id = d.materia_id WHERE ce.id = ${req.body.clientId} ORDER BY m.nome`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}