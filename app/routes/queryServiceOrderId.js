
module.exports = function(app, serviceOrderId, dbConnection, pool){
    
    app.get(`/${serviceOrderId}/:soId`, function(req, res){
        let sql = `SELECT * FROM OrdemServico WHERE OrdemServico.id = ${req.params.soId}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}