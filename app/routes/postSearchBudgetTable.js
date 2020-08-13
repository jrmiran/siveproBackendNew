module.exports = function(app, post, dbConnection, pool){
    app.post(`/${post}`, function(req, res){
        let sql = `SELECT o.id, c.nome as nomeLoja, ce.nome as nomeCliente, o.data, o.valorTotal, o.status FROM Orcamento as o JOIN Cliente as c ON o.clienteJuridico_id = c.id JOIN ClienteEmpresa as ce ON o.clienteEmpresaa_id = ce.id ORDER BY o.id DESC;
        SELECT io.id, io.orcamento_id, io.valorTotal FROM ItemOrcamento as io ORDER BY io.orcamento_id DESC`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}