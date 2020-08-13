module.exports = function(app, insertImageSO, dbConnection, pool){
    
    app.get(`/${insertImageSO}/:idSO/:imageUrl`, function(req, res){
        let sql = ` UPDATE OrdemServico SET image = ${req.params.imageUrl} WHERE OrdemServico.id = ${req.params.idSO}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });    
}