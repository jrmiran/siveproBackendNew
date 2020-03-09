
module.exports = function(app, soExecution, dbConnection, pool){

    app.get(`/${soExecution}/:osId/:date/:stone/:empreita/:stoneValue/:employees/:shares/:empreitaValue`, function(req, res){
        console.log(req.params);
        let sql =   `DELETE FROM OrdemServico_funcionarios WHERE OrdemServico_funcionarios.OrdemServico_id = ${req.params.osId};
                     DELETE FROM OrdemServico_porcentagens WHERE OrdemServico_porcentagens.OrdemServico_id = ${req.params.osId};
                     INSERT INTO OrdemServico_funcionarios(OrdemServico_id, funcionarios) VALUES ${req.params.employees};
                     INSERT INTO OrdemServico_porcentagens(OrdemServico_id, porcentagens) VALUES ${req.params.shares};
                     UPDATE OrdemServico SET dataTermino = ${req.params.date}, pedra = ${req.params.stone}, empreita = ${req.params.empreita}, terminado = 1, valorPedra = ${req.params.stoneValue}, valorEmpreita = '${req.params.empreitaValue}' WHERE OrdemServico.id = ${req.params.osId}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}