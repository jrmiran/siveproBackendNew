
module.exports = function(app, serviceOrder, dbConnection, pool){

    
    app.get(`/${serviceOrder}/:budgetId`, function(req, res){
        let sql = `SELECT * FROM OrdemServico WHERE OrdemServico.orcamento_id = ${req.params.budgetId}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}