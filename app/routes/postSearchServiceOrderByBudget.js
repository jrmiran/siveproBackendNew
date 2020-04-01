module.exports = function(app, post, dbConnection, pool){
    app.post(`/${post}`, function(req, res){
        let sql = `SELECT * FROM OrdemDeServico WHERE orcamento_id = ${req.body.budgetId};
        SELECT * FROM ExecucaoOrdemServico WHERE ordemDeServico_id = LAST_INSERT_ID()`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}