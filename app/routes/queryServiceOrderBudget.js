
module.exports = function(app, serviceOrderBudget, dbConnection, pool){
    
    app.get(`/${serviceOrderBudget}/:soId`, function(req, res){
        let sql = `SELECT os.id, os.dataPrevisaoTermino, os.loja, os.cliente, os.observacao, os.imagem, o.comodo, o.item FROM OrdemServico as os, Orcamento as o WHERE OrdemServico.id = ${req.params.soId} and Orcamento.id = OrdemServico.orcamento_id`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}